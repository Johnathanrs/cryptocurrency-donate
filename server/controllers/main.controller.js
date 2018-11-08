import Project, { Address, Wallet, Coin } from '../models/project';
import User, { SubProject } from '../models/user';
import Guide from '../models/guide';
import Order from '../models/order';
import Ticket from '../models/ticket';
import Referral from '../models/referral';
import Setting from '../models/setting';
import Refund from '../models/refund';
import { verifyToken } from '../routes/auth';
const _ = require('lodash');

import { geocoder, searchNearByFromProject } from '../util/util';
import { settings } from 'cluster';
var uniqueFilename = require('unique-filename');
const generator = require('generate-password');
const sgMail = require('@sendgrid/mail');
const bitcoinTransaction = require('../util/btctransaction');
const ltcTransaction = require('../util/ltctransaction');
const ethTransaction = require('../util/ethtransaction');

function projectBalance(project) {
  const ethAddr = project.wallet.ETH.address;
  const btcAddr = project.wallet.BTC.address;
  const ltcAddr = project.wallet.LTC.address;
  Promise.all([
    ethTransaction.getBalance(ethAddr),
    bitcoinTransaction.getBalance(btcAddr, { network: process.env.BTCNET }),
    ltcTransaction.getUTXOs(ltcAddr, process.env.LTCNET),
  ]).then(data => {
    project.donatedETH = parseFloat(data[0]);
    project.donatedBTC = parseFloat(data[1]);
    let donatedLTC = 0;
    const utxos = data[2];
    for (let i = 0; i < utxos.length; i++) {
      if (utxos[i].confirmations > 0) {
        donatedLTC += utxos[i].satoshis;
      }
    }
    project.donatedLTC = parseFloat(donatedLTC) / bitcoinTransaction.BITCOIN_SAT_MULT;
    project.save((err, saved) => {
      if (err) {
        console.log(err);
      }
      // console.log(saved);
    });
  }).catch(err => {
    console.log('project address collector', err);
  });
}

export function projectCoinBalanceChecker() {
  Project.find().sort('-dateAdded').exec((errors, projects) => {
    if (errors) {
      return console.log(errors);
    }
    projects.map(project => {
      setTimeout(() => { projectBalance(project); }, 3000);
    });
  });
}

export function getUsers(req, res) {
  Promise.all([
    User.find().sort('-dateAdded'),
    Refund.find().sort('-dateAdded').populate('orderID').populate('userID'),
  ]).then(data => {
    res.json({ users: data[0], refunds: data[1] });
  }).catch(err => { return res.status(500).send({ errors: err.message }); });
}

export function getUserGuide(req, res) {
  Guide.find().sort('-dateAdded').exec((errors, guide) => {
    if (errors) {
      res.status(500).send({ errors });
    }
    res.json({ guide });
  });
}

export function saveUserGuide(req, res) {
  req.body.guide.map(faq => {
    if (faq._id) {
      Guide.findOneAndUpdate({ _id: faq._id }, { upsert: true }).then((err, saved) => {
        if (err) {
          return res.status(500).send({ errors: err.message });
        }
      });
    } else {
      const newFAQ = new Guide(faq);
      newFAQ.save((err, saved) => {
        if (err) {
          return res.status(500).send({ errors: err.message });
        }
      });
    }
  });
}

export function getReferrals(req, res) {
  if (!req.decoded) {
    return res.status(403).send({ errors: req.err });
  }
  Referral.find({ sender: req.decoded._id.toString() }).sort('-dateAdded').exec((errors, referrals) => {
    if (errors) {
      res.status(500).send({ errors });
    }
    res.json({ referrals });
  });
}

export function registerReferral(req, res) {
  Referral.findOne({ _id: req.body.id }).then(referral => {
    if (!referral) {
      console.log('no such referral');
    } else {
      referral.isReferred = true;
      referral.dateReferred = new Date();
      referral.save((err, saved) => {
        if (err) {
          console.log('err during update the referral', err);
        } else {
          console.log('successfully update for referral');
        }
      });
    }
  });
}

export function addNewReferral(req, res) {
  if (!req.decoded) {
    return res.status(403).send({ errors: req.err });
  }
  const referral = new Referral();
  referral.sender = req.decoded._id.toString();
  referral.projectID = req.body.projectID;
  referral.receiver = req.body.receiver;
  referral.field1 = req.body.field1;
  referral.field2 = req.body.field2;
  Promise.all([
    User.findOneAndUpdate({ _id: referral.sender }, { payoutForReferral: req.body.payout }),
    referral.save()
  ]).then(data => {
    const saved = data[1];
    const url = `http://smartprojects.tech/referral/${saved.projectID}/${saved._id}/${saved.field1}/${saved.field2}/${saved.receiver}`;
    const receiver = saved.receiver;
    const subject = 'Promotion';
    const text = `Congratulation! It is time to donate. Please click below link to get involved. ${url}`;
    const html = `<div><strong>Congratulation</strong><p>It is time to donate <a href='${url}'>Please click this link to get involved.</a></p></div>`;
    sendEmail({
      to: receiver,
      subject: subject,
      text: text,
      html: html,
    }).then(msg => {
      return res.send({ status: 'OK' });
    }).catch(err => { return res.status(404).send({ errors: err.message }); });
  }).catch(err => { return res.status(404).send({ errors: err.message }); });
}

export function createRefundRequest(req, res) {
  if (!req.decoded) {
    return res.status(403).send({ errors: req.err });
  }
  const refund = new Refund();
  refund.userID = req.decoded.id.toString();
  refund.orderID = req.body.orderID;
  refund.save((err, saved) => {
    if (err) {
      return res.status(500).send({ errors: err.message });
    }
    return res.send('Successfully created');
  });
}

export function deleteOrder(req, res) {
  if (!req.decoded) {
    return res.status(403).send({ errors: req.err });
  }
  if (req.body.order.status == 'partial') {
    const refund = new Refund();
    refund.userID = req.decoded._id.toString();
    refund.orderID = req.body.order._id;
    Promise.all([
      refund.save(),
      Order.findOneAndUpdate({ _id: req.body.order._id }, { selectedTickets: req.body.order.paidTickets, status: 'fulll' }),
    ]).then(data => {
      return res.send('Successfully created');
    }).catch(err => { return res.send({ errors: err.message }); });
  } else {
    Order.deleteOne({ _id: req.body.order._id }).exec((err, obj) => {
      if (err) {
        return res.status(500).send({ errors: err.message });
      }
      return getOrders(req, res);
    });
  }
}

export function getOrders(req, res) {
  if (!req.decoded) {
    return res.status(403).send({ errors: req.err });
  }
  Order.find({ userID: req.decoded._id.toString() }).sort('-dateAdded').populate('projectID').populate('userID').exec((errors, orders) => {
    if (errors) {
      res.status(500).send({ errors });
    }
    res.json({ orders });
  });
}

export function getUser(req, res) {
  Promise.all([
    User.findOne({ _id: req.decoded._id.toString() }),
    Project.find(),
  ]).then(data => {
    if (!data[0]) { return res.send({ errors: 'Unauthorized user' }); }
    return res.json({ user: data[0], projects: data[1] });
  }).catch(err => { return res.send({ errors: err.message }); });
}

export function updateUser(req, res, next) {
  User.findById(req.body.user._id).then((user) => {
    if (!user) { return res.status(401).send({ errors: 'Unauthorized user' }); }
    const userData = req.body.user;
    if (typeof req.body.password !== 'undefined' && req.body.password) {
      user.setPassword(req.body.password);
    }

    user.fullName = userData.fullName && userData.fullName || user.fullName;
    user.nationality = userData.nationality && userData.nationality || user.nationality;
    user.birthday = userData.birthday && userData.birthday || user.birthday;
    user.address = userData.address && userData.address || user.address;
    user.phone = userData.phone && userData.phone || user.phone;
    user.payoutBTC = userData.payoutBTC && userData.payoutBTC || user.payoutBTC;
    user.payoutETH = userData.payoutETH && userData.payoutETH || user.payoutETH;
    user.payoutLTC = userData.payoutLTC && userData.payoutLTC || user.payoutLTC;
    user.ID = userData.ID && userData.ID || user.ID;

    return user.save().then(function() {
      return res.json({ user: user.toAuthJSON() });
    });
  }).catch(next);
}

export function signin(req, res, next) {
  if (!req.body.user.email) {
    return res.status(422).json({ errors: { email: "can't be blank" } });
  }

  if (req.body.user.email != 'veselin.mitrovic@outlook.com') {
    return res.status(422).json({ errors: 'You are not the admin.' });
  }

  if (!req.body.user.password) {
    return res.status(422).json({ errors: { password: "can't be blank" } });
  }

  User.findOne({ email: 'veselin.mitrovic@outlook.com'})
  .then(user => {
    if(!user) {
      return res.status(422).json({errors: 'User does not exist'});
    }
    else {
      if (!user.validPassword(req.body.user.password)) {
        return res.json({ errors: 'Email and Password does not match' });
      } else {
        user.token = user.generateJWT();
        return res.json({ user: user.toAuthJSON() });
      }
    }
  })
  .catch(err => {
      return res.send(err);
  });
}

export function signup(req, res) {
  User.findOne({ email: req.body.user.email })
  .then(user => {
    if (user) {
      return res.status(422).json({ errors: 'User width this email already exists' });
    } else {
      const newUser = new User();

      newUser.email = req.body.user.email;
      newUser.role = 'Owner';
      newUser.setPassword(req.body.user.password);
      return newUser.save((err, saved) => {
        return res.json({ user: newUser.toAuthJSON() });
      });
    }
  }).catch(err => { return res.send({ errors: err.message }); });
}

export function customerSignin(req, res, next) {
  if (!req.body.user.email) {
    return res.status(422).json({ errors: { email: "can't be blank" } });
  }

  if (!req.body.user.password) {
    return res.status(422).json({ errors: { password: "can't be blank" } });
  }

  User.findOne({'email': req.body.user.email})
  .then(user => {
    if(!user) {
      return res.status(404).send({ errors: 'User with that email does not exist' });
    }
    if (!user.validPassword(req.body.user.password)) {
      return res.json({ errors: 'Email and Password does not match' });
    }
    user.token = user.generateJWT();
    return res.json({ user: user.toAuthJSON() });
  })
  .catch(err => {
      return res.send({ errors: err.message });
  });
}

export function customerSignup(req, res) {
  const referralID = req.body.user.referralID && req.body.user.referralID || '';
  User.findOne({ email: req.body.user.email })
  .then(user => {
    if (user) {
      return res.status(422).json({ errors: 'User with this email already exists' });
    }
    const newUser = new User();
    newUser.email = req.body.user.email;
    newUser.role = 'Customer';
    const newPassword = generator.generate({
      length: 10,
      numbers: true,
    });
    newUser.setPassword(newPassword);
    newUser.referralID = referralID;
  
    return newUser.save((err, saved) => {
      const text = `Congratulation! You successfully signed up. Your password is ${newPassword}`;
      const html = `<div><strong>Congratulation</strong><p>You successfully signed up. Your password is ${newPassword}</p></div>`;
      sendEmail({
        to: saved.email,
        subject: 'Authentication',
        text: text,
        html: html,
      }).then(msg => {
        return res.json({ user: newUser.toAuthJSON() });
      });
    });
  }).catch(err => { return res.send({ errors: err.message }); });
}

export function forgetPassword(req, res) {
  User.findOne({ email: req.body.email })
  .then(user => {
    if (!user) {
      return res.status(404).json({ errors: 'User with this email does not exists' });
    }
    const token = user.generateSimpleJWT();
    const url = `http://smartprojects.tech/user/changepassword/${token}`;
    const text = `Congratulation! You can change your password in this link ${url}`;
    const html = `<div><strong>Congratulation</strong><p>You can change your password in <a href='${url}'>this link</a></p></div>`;
    sendEmail({
      to: user.email,
      subject: 'Change password',
      text: text,
      html: html,
    }).then(msg => {
      return res.json({ status: 'OK' });
    });
  });
}

export function changePassword(req, res) {
  const result = verifyToken(req.body.token);
  if (result.err) {
    return res.status(400).send({ errors: 'Token expired, Please try to send request for changing password again.' });
  }
  User.findById(result.decoded._id).then((user) => {
    if (!user) { return res.status(404).send({ errors: 'There is no such user with this email' }); }
    if (typeof req.body.password !== 'undefined' && req.body.password) {
      user.setPassword(req.body.password);
    }
    return user.save().then(() => {
      return res.json({ user: user.toAuthJSON() });
    });
  }).catch(err => { return res.status(404).send({ errors: err.message }); });
}

export function authCheck(req, res) {
  if (!req.decoded) {
    return res.send({ status: 'unauthorized' });
  }
  User.findOne({ _id: req.decoded._id.toString() })
  .then(user => {
    if (user) {
      return res.send({ status: 'authorized' });
    }
    return res.send({ status: 'unauthorized' });
  }).catch(err => {
    return res.send({ status: 'unauthorized' });
  });
}

export function authCheckAdmin(req, res) {
  if (!req.decoded) {
    return res.send({ status: 'unauthorized' });
  }
  User.findOne({ _id: req.decoded._id.toString(), email: 'veselin.mitrovic@outlook.com' })
  .then(user => {
    if (user) {
      return res.send({ status: 'authorized' });
    }
    return res.send({ status: 'unauthorized' });
  }).catch(err => {
    return res.send({ status: 'unauthorized' });
  });
}

function updateUserAndOrder(res, user, projectID, totalTickets, btcTicketPrice, ethTicketPrice, ltcTicketPrice, btcTotalPrice, ethTotalPrice, ltcTotalPrice) {
  if (!user.subProjects) {
    user.subProjects = [];
  }
  let subProject = user.subProjects.find(sub => sub.projectID == projectID);
  if (!subProject) {
    const btcAddress = bitcoinTransaction.createUserBitcoinAddress();
    const ltcAddress = ltcTransaction.createUserLitecoinAddress();
    const ethAddress = ethTransaction.createUserEthereumAddress();
    const _newSubProject = new SubProject();
    _newSubProject.projectID = projectID;
    _newSubProject.btcAddress = btcAddress;
    _newSubProject.ethAddress = ethAddress;
    _newSubProject.ltcAddress = ltcAddress;
    _newSubProject.totalTickets = totalTickets;
    user.subProjects.push(_newSubProject);
    subProject = _newSubProject;
  }
 
  user.save((err, savedUser) => {
    if (err) {
      return res.send({ errors: err.message });
    }
    const order = new Order();
    order.userID = user._id;
    order.projectID = subProject.projectID;
    order.selectedTickets = totalTickets;
    order.btcAddress = subProject.btcAddress.publicKey;
    order.ethAddress = subProject.ethAddress.publicKey;
    order.ltcAddress = subProject.ltcAddress.publicKey;
    order.btcPrivateAddress = subProject.btcAddress.privateKey;
    order.ethPrivateAddress = subProject.ethAddress.privateKey;
    order.ltcPrivateAddress = subProject.ltcAddress.privateKey;
    order.btcTicketPrice = btcTicketPrice;
    order.ethTicketPrice = ethTicketPrice;
    order.ltcTicketPrice = ltcTicketPrice;
    order.network = process.env.BTCNET;
    order.status = 'pending';
    order.save((err, savedOrder) => {
      return res.send({
        status: 'authorized',
        id: savedOrder.id,
        email: savedUser.email,
        token: savedUser.generateJWT(),
        crypto: {
          BTC: {
            address: subProject.btcAddress,
            amount: btcTotalPrice,
            message: btcTotalPrice + ' BTC Donation to ',
          },
          ETH: {
            address: subProject.ethAddress,
            amount: ethTotalPrice,
            message: ethTotalPrice + ' ETH Donation to ',
          },
          LTC: {
            address: subProject.ltcAddress,
            amount: ltcTotalPrice,
            message: ltcTotalPrice + ' LTC Donation to ',
          },
        },
      });
    });
  });
}

export function getNow(req, res) {
  if (!req.decoded) {
    return res.send({ status: req.err });
  }

  if (!req.body.ticket.projectID) {
    return res.status(400).send({ errors: 'Bad request.' });
  }

  // req.decoded._id = user.id
  User.findOne({ _id: req.decoded._id.toString() })
  .then((user) => {
    if (user) { // User exists
      return updateUserAndOrder(res, user, req.body.ticket.projectID, req.body.ticket.totalTickets, req.body.ticket.ticketPrice.BTC, req.body.ticket.ticketPrice.ETH, req.body.ticket.ticketPrice.LTC, req.body.ticket.totalPrice.BTC, req.body.ticket.totalPrice.ETH, req.body.ticket.totalPrice.LTC);
    }
    return res.send({ status: 'unauthorized' });
  });
}

export function getTicketInfo(req, res) {
  if (!req.body.params.token) {
    return res.status(401).send('Request has no token in body');
  } else {
    User.findOne({ token: req.body.params.token })
    .then(user => {
    });
  }
}

function sendEmail(options) {
  return new Promise((resolve, reject) => {
    sgMail.setApiKey(process.env.sendgrid);
    const msg = {
      to: options.to,
      from: 'info@smartprojects.tech',
      subject: options.subject,
      text: options.text,
      html: options.html,
    };
    sgMail.send(msg).then((statusMessage) => {
      resolve('OK');
    });
  }).catch(err => { console.log('err', err); return { err: err }; });
}

export function userSignup(req, res) {
  if (!req.body.user.email) {
    return res.status(401).send('Request has no email in body');
  }
  User.findOne({ email: req.body.user.email })
  .then((user) => {
    if (user) {
      return updateUserAndOrder(res, user, req.body.ticket.projectID, req.body.ticket.totalTickets, req.body.ticket.ticketPrice.BTC, req.body.ticket.ticketPrice.ETH, req.body.ticket.ticketPrice.LTC, req.body.ticket.totalPrice.BTC, req.body.ticket.totalPrice.ETH, req.body.ticket.totalPrice.LTC);
    }
    const newPassword = generator.generate({
      length: 10,
      numbers: true,
    });
    const text = `Congratulation! You successfully signed up. Your password is ${newPassword}`;
    const html = `<div><strong>Congratulation</strong><p>You successfully signed up. Your password is ${newPassword}</p></div>`;
    sendEmail({
      to: req.body.user.email,
      subject: 'Authentication',
      text: text,
      html: html,
    }).then(msg => {
      if (msg.err) {
        return console.log(msg);
      }
      const newUser = new User();
      newUser.email = req.body.user.email;
      newUser.role = 'Customer';
      newUser.setPassword(newPassword);
      return updateUserAndOrder(res, newUser, req.body.ticket.projectID, req.body.ticket.totalTickets, req.body.ticket.ticketPrice.BTC, req.body.ticket.ticketPrice.ETH, req.body.ticket.ticketPrice.LTC, req.body.ticket.totalPrice.BTC, req.body.ticket.totalPrice.ETH, req.body.ticket.totalPrice.LTC);
    });
  }).catch(err => { return res.send({ errors: err.message }); });
}

export function getMyTickets(req, res) {
  if (!req.decoded) {
    return res.status(400).send({ errors: req.err });
  }
  Ticket.find({ userID: req.decoded._id.toString(), status: 'valid' }).sort('-dateAdded').populate('projectID').populate('orderID').populate('userID').exec((errors, tickets) => {
    if (errors) {
      res.status(500).send({ errors });
    }
    res.json({ tickets });
  });
}

export function sendReferral(req, res) {
  if (!req.decoded) {
    return res.status(400).send({ errors: req.err });
  }
  
}

export function transferTickets(req, res) {
  if (!req.decoded) {
    return res.status(400).send({ errors: req.err });
  }
  User.findOne({ email: req.body.transferredEmail }).exec((err, user) => {
    if (err) {
      return res.end({ errors: err.message });
    }
    
    // Create order with type of 'transfer'
    const order = new Order();
    order.userID = req.decoded._id.toString();
    order.projectID = req.body.projectID;
    order.ticketID = req.body.ticketID;
    order.btcAmount = req.body.btcTicketPrice;
    order.ethAmount = req.body.ethTicketPrice;
    order.ltcAmount = req.body.ltcTicketPrice;
    order.selectedTickets = req.body.tickets;
    order.btcAddress = req.body.btcAddress.publicKey;
    order.ethAddress = req.body.ethAddress.publicKey;
    order.ltcAddress = req.body.ltcAddress.publicKey;
    order.btcPrivateAddress = req.body.btcAddress.privateKey;
    order.ethPrivateAddress = req.body.ethAddress.privateKey;
    order.ltcPrivateAddress = req.body.ltcAddress.privateKey;
    order.btcTicketPrice = req.body.btcTicketPrice;
    order.ethTicketPrice = req.body.ethTicketPrice;
    order.ltcTicketPrice = req.body.ltcTicketPrice;
    order.network = process.env.BTCNET;
    order.status = 'paid';
    order.type = 'transfer';

    const toEmail = req.body.transferredEmail;
    const subject = 'Ticket Transfer';
    let text = `Congratulation! You got ${req.body.tickets} tickets from ${req.body.owner}. You can check it out on your dashboard. ${req.body.message}`;
    let html = `<div><strong>Congratulation</strong><p>You got ${req.body.tickets} tickets from ${req.body.owner}. You can check it out on <a href='http://smartproject.tech/user/mytickets/transferred/${req.body.owner}'>your dashboard</a></p><p>${req.body.message}</p></div>`;

    if (!user) {
      text += 'Please verify your email address to claim your tickets';
      html = `<div><strong>Congratulation</strong><p>You got ${req.body.tickets} tickets from ${req.body.owner}. You can check it out on <a href='http://smartproject.tech/user/mytickets/transferred/${req.body.owner}'>your dashboard.</a></p><p>${req.body.message}</p><p> Please verify your email address to claim your tickets <a href='http://smartprojects.tech/user/signup'>here</a></p></div>`;
    }

    return Promise.all([
      order.save(),
      sendEmail({
        to: toEmail,
        subject: subject,
        text: text,
        html: html,
      }),
      Ticket.findOneAndUpdate({ _id: req.body.ticketID }, { status: 'transferred' }),
    ]).then((data) => {
      const ticket = new Ticket();
      ticket.userID = user._id;
      ticket.projectID = data[0].projectID;
      ticket.orderID = data[0]._id.toString();
      ticket.save((err, saved) => {
        return res.send({ status: 'OK' });
      }).catch(err => { return res.end({ errors: err.message }); });
    }).catch(err => { return res.end({ errors: err.message }); });
  });
}

function createTicketsBasedUponOrder(paidTickets, order) {
  const tickets = [];
  for (let i = 0; i < paidTickets; i++) {
    const ticket = new Ticket();
    ticket.userID = order.userID._id;
    ticket.projectID = order.projectID;
    ticket.orderID = order._id;
    tickets.push(ticket);
  }
 
  Ticket.insertMany(tickets, (err, docs) => {
    if (err) {
      console.log('error happened during ticket creating');
    } else {
      console.log('created tickets', docs);
    }
  });
}

function updateOrderAndProject(paidTickets, order, project, txid, paidCoin) {
  if (paidTickets > 0) {
    // If the user is referred user, update the referral document realted to that user.
    if (order.userID.referralID) {
      
    }
    order.paidTickets = paidTickets;
    console.log(order.ltcAmount, '--', order.btcAmount, ' ---', order.ethAmount);
    order.datePaid = new Date();
    const status = order.paidTickets < order.selectedTickets ? 'partial' : 'full';
    order.status = status;
    order.paidCoin = paidCoin;

    project.maximumAvailableTickets = project.maximumAvailableTickets - paidTickets;

    const toEmail = order.userID.email;
    const subject = 'Confirmation';
    const text =  `Congratulation! Your payment has confirmed. ${order.btcAmount} in Bitcoin, ${order.ethAmount} in Ethereum and ${order.ltcAmount} in Litecoin. Puchased tickets ${order.paidTickets}`;
    const html = `<div><strong>Congratulation</strong><p>Your payment has confirmed. ${order.btcAmount} in Bitcoin, ${order.ethAmount} in Ethereum and ${order.ltcAmount} in Litecoin. Puchased tickets ${order.paidTickets}</p></div>`;

    return Promise.all([
      Referral.findOneAndUpdate({ _id: order.userID.referralID }, { isReferred: true, datePaid: new Date() }),
      order.save(),
      project.save(),
      sendEmail({
        to: toEmail,
        subject: subject,
        text: text,
        html: html,
      }),
    ]).then((err, data) => {
      console.log(err, data);
    });
  }
}

let isLTCSending = false;
let isETHSending = false;
let isBTCSending = false;

function promiseCheck(order) {
  return Promise.all([
    bitcoinTransaction.getBTCUTxos(order.btcAddress),
    ethTransaction.getBalance(order.ethAddress),
    ltcTransaction.getUTXOs(order.ltcAddress, process.env.LTCNET),
  ]).then(data => {
    order.ethAmount = parseFloat(data[1]);
    let ltcAmount = 0;
    const utxos = data[2];
    for (let i = 0; i < utxos.length; i++) {
      if (utxos[i].confirmations > 0) {
        ltcAmount += utxos[i]['satoshis'];
      }
    }
    order.ltcAmount = parseFloat(ltcAmount) / bitcoinTransaction.BITCOIN_SAT_MULT;

    let btcAmount = 0;
    let ninputs = 0;
    const btcUtxos = data[0];
    for (let i = 0; i < btcUtxos.length; i++) {
      if (btcUtxos[i].confirmations > 0) {
        btcAmount += btcUtxos[i]['satoshis'];
        ninputs++;
      }
    }
    order.btcAmount = parseFloat(btcAmount) / bitcoinTransaction.BITCOIN_SAT_MULT;

    Project.findOne({ _id: order.projectID }).then((project) => {
      if (!project) { console.log(`no such project while collection coin from the user address, for project ${order.projectID}`); return; }
      project.donors.push(order.userID);
      project.donors = _.intersection(project.donors);

      let paidTickets = 0;
      if (ethTransaction.calcBasicOpportunities(order.ethAmount)) {
        const ethTickets = Math.floor((order.ethAmount) / order.ethTicketPrice);
        order.ethChangeAmount = order.ethAmount - ethTickets * order.ethTicketPrice;
        paidTickets += ethTickets;
        if (!isETHSending) {
          isETHSending = true;
          ethTransaction.sendTransaction(order.ethAddress, order.ethPrivateAddress, project.wallet.ETH.address, order.ethAmount).then(txid => {
            isETHSending = false;
            if (txid) {
              console.log(txid);
            }
            createTicketsBasedUponOrder(ethTickets, order);
            updateOrderAndProject(paidTickets, order, project, txid, 'ETH');
          }).catch(err => { console.log('eth transaction', err.message); isETHSending = false;});
        }
      }

      // BTC transaction
      if (order.btcAmount) {
        const btcTickets = Math.floor((order.btcAmount) / order.btcTicketPrice);
        order.btcChangeAmount = order.btcAmount - btcTickets * order.btcTicketPrice;
        paidTickets += btcTickets;
        const fee = bitcoinTransaction.getTransactionSize(ninputs, 1);
        const amount = order.btcAmount * bitcoinTransaction.BITCOIN_SAT_MULT;
        if (amount <= fee) {
          console.log('error balance is less than fee ---- btcAmount ', order.btcAmount, ' --- fee ', fee);
        } else {
          if (!isBTCSending) {
            isBTCSending = true;
            bitcoinTransaction.doTransaction({
              utxos: btcUtxos,
              to: project.wallet.BTC.address,
              privateKey: order.btcPrivateAddress,
              amount: btcAmount,
              fee: fee,
            }).then(msg => {
              isBTCSending = false;
              console.log(msg);
              if (msg.err) {
                console.log(msg.err);
              } else if (msg.statusCode == 200 || msg.status == 'OK') { // 200 for blockchain  'OK' for Omni
                createTicketsBasedUponOrder(btcTickets, order);
                updateOrderAndProject(paidTickets, order, project, '', 'BTC');
              }
            }).catch(err => { console.log('btc transaction ', err.message); isBTCSending = false; });
          }
        }
      }

      // LTC transaction
      if (order.ltcAmount) {
        const ltcTickets = Math.floor((order.ltcAmount) / order.ltcTicketPrice);
        order.ltcChangeAmount = order.ltcAmount - ltcTickets * order.ltcTicketPrice;
        paidTickets += ltcTickets;
        const feeLTC = 0.00077 * bitcoinTransaction.BITCOIN_SAT_MULT;
        if (order.ltcAddress < feeLTC) {
          console.log('error balance is less than fee ---- amount ', order.ltcAmount, ' --- fee ', feeLTC);
        } else {
          if (!isLTCSending) {
            isLTCSending = true;
            ltcTransaction.sendTransaction(utxos, project.wallet.LTC.address, (ltcAmount - feeLTC), feeLTC, order.ltcPrivateAddress)
            .then(msg => {
              isLTCSending = false;
              if (msg) {
                console.log(msg);
              }
              createTicketsBasedUponOrder(ltcTickets, order);
              updateOrderAndProject(paidTickets, order, project, '', 'LTC');
            }).catch(err => { console.log('ltc transaction', err.message); isLTCSending = false; });
          }
        }
      }
    }).catch(err => { console.log('no such project'); });
  }).catch(err => { console.log('balance check for user address', err.message); });
}

export function checkBalanceFromFront(req, res) {
  if (!req.decoded) {
    return res.status(400).send({ errors: req.err });
  }
  Order.findOne({ _id: req.body.orderID }).populate('projectID').exec((err, order) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (order && order.status == 'paid') {
      if (order.totalTickets > order.paidTickets) {
        return res.send({ status: 'less', paidTickets: order.paidTickets, maximumAvailableTickets: order.projectID.maximumAvailableTickets, btcAmount: order.btcAmount, ethAmount: order.ethAmount, ltcAmount: order.ltcAmount, paidCoin: order.paidCoin });
      }
      return res.send({ status: 'ok', paidTickets: order.paidTickets, maximumAvailableTickets: order.projectID.maximumAvailableTickets, btcAmount: order.btcAmount, ethAmount: order.ethAmount, ltcAmount: order.ltcAmount, paidCoin: order.paidCoin });
    }
    return res.send({ status: 'again' });
  });
}

export function userCoinBalanceChecker(req, res) {
  Order.find({ status: 'pending', network: process.env.BTCNET }).populate('userID').exec((errors, orders) => {
    if (errors) {
      return console.log('error in check balance', errors.message);
    }
    orders.map(order => {
      setTimeout(() => { promiseCheck(order); }, 3000);
    });
  });
}

/**
 * Create Project
 */

export function createProject(req, res) {
  if (!req.body.project.title) {
    res.status(403).send({ errors: 'something wrong happened' });
    return;
  }
  try {
    const project = req.body.project;
    const newObject = new Project(project);
    const wallet = new Wallet();
    const coin = new Coin();
    coin.address = project.coin_BTC;
    wallet.BTC = coin;
    coin.address = project.coin_ETH;
    wallet.ETH = coin;
    coin.address = project.coin_LTC;
    wallet.LTC = coin;
    newObject.title = project.title;
    newObject.subTitle = project.sub_title;
    newObject.ticketPriceInBTC = project.ticket_price_BTC;
    newObject.ticketPriceInETH = project.ticket_price_ETH;
    newObject.ticketPriceInLTC = project.ticket_price_LTC;
    newObject.ticketPriceInUSD = project.ticket_price_USD;
    newObject.maximumAvailableTickets = project.total_tickets;
    newObject.maximumAvailableTicketsPerPerson = project.maximum_available_tickets_per_person;
    newObject.fundingDuration = project.funding_duration;
    newObject.projectThumbnail = project.projectThumbnail;
    newObject.images = project.images;
    newObject.video = project.video;
    newObject.keyfacts = project.key_facts.filter(fact => fact.name != '');
    newObject.wallet = wallet;
    newObject.totalMoneyInBTC = project.total_money_in_BTC;
    newObject.totalMoneyInUSD = project.total_money_in_USD;
    newObject.totalTickets = project.total_tickets;
    newObject.donors = [];
    newObject.shortDescription = project.short_description;
    newObject.fullDescription = project.long_description;

    geocoder(`${project.city}, ${project.country}`).then((geo) => {
      const address = new Address();
      address.country = project.country;
      address.city = project.city;
      address.postalCode = project.postal_code;
      const coords = geo && geo[0] || { latitude: geo.latitude, longitude: geo.longitude };
      address.lat = coords.latitude;
      address.lng = coords.longitude;
      newObject.address = address;
      // newObject.location = project.location;
      newObject.save((errors, saved) => {
        if (errors) {
          return res.status(500).send({ errors });
        }
        return res.json({ project: saved, status: 'Ok' });
      });
    }).catch(err => { return res.send({ errors: err.message }); });
  } catch (err) {
    res.send({ errors: err.message });
  }
}

export function updateProject(req, res) {
  if (!req.body.project._id) {
    res.status(403).end();
  } else {
    Project.findOne({ _id: req.body.project._id }).exec((errors, newObject) => {
      if (errors) {
        res.status(500).send({ errors });
      } else {
        const project = req.body.project;
        newObject.title = project.title;
        newObject.subTitle = project.sub_title;
        newObject.ticketPriceInBTC = project.ticket_price_BTC;
        newObject.ticketPriceInETH = project.ticket_price_ETH;
        newObject.ticketPriceInLTC = project.ticket_price_LTC;
        newObject.ticketPriceInUSD = project.ticket_price_USD;
        newObject.maximumAvailableTickets = project.total_tickets;
        newObject.maximumAvailableTicketsPerPerson = project.maximum_available_tickets_per_person;
        newObject.fundingDuration = project.funding_duration;
        newObject.projectThumbnail = project.projectThumbnail;
        newObject.images = project.images;
     
        newObject.video = project.video;
        newObject.keyfacts = project.key_facts.filter(fact => fact.name != '');
        newObject.wallet.BTC.address = project.coin_BTC;
        newObject.wallet.ETH.address = project.coin_ETH;
        newObject.wallet.LTC.address = project.coin_LTC;
        newObject.totalMoneyInBTC = project.total_money_in_BTC;
        newObject.totalMoneyInUSD = project.total_money_in_USD;
        newObject.totalTickets = project.total_tickets;
        newObject.shortDescription = project.short_description;
        newObject.fullDescription = project.long_description;

        // newObject.location = project.location;
        geocoder(`${project.city}, ${project.country}`).then((geo) => {
          newObject.address.country = project.country;
          newObject.address.city = project.city;
          newObject.address.postalCode = project.postal_code;
          const coords = geo && geo[0] || { latitude: geo.latitude, longitude: geo.longitude };
          newObject.address.lat = coords.latitude;
          newObject.address.lng = coords.longitude;
          newObject.save((errors, saved) => {
            if (errors) {
              return res.status(500).send({ errors });
            }
            return res.json({ project: saved, status: 'Ok' });
          });
        }).catch(err => { return res.send({ errors: err.message }); });
      }
    });
  }
}

export function getProjects(req, res) {
  Project.find({}).sort('-dateAdded').populate('donors').exec((errors, projects) => {
    if (errors) {
      return res.status(500).send({ errors });
    } 
    res.json({ projects });
  });
}

export function deleteProject(req, res) {
  if (!req.body._id) {
    res.status(403).send({ errors: 'something wrong happened'});
  } else {
    Project.deleteOne({ _id: req.body._id }).exec((err, obj) => {
      if (err) {
        return res.status(500).send({ errors: err.message });
      }
      return getProjects(req, res);
    });
  }
}

export function setFeaturedProject(req, res) {
  if (!req.body._id) {
    res.status(403).send({errors: 'something wrong happened'});
  } else {
    Project.findOneAndUpdate({ _id: req.body._id }, { $set: { isFeatured: req.body.set } }, { upsert: true }, (err, model) => {
      if (err) {
        return res.status(500).send({ errors: err.message });
      }
      return getProjects(req, res);
    });
  }
}

export function getProject(req, res) {
  if (req.params.id == 'undefined' || req.params.id == 'null') { // check ip to get nearby project
    Project.find().sort('-dateAdded').exec((errors, projects) => {
      if (errors) {
        return res.status(500).send({ errors });
      }
      searchNearByFromProject(projects).then(_id => {
        const featuredProjects = projects.filter(sub => sub.isFeatured == true);
        let project = projects[0];
        if (_id) {
          project = projects.filter(sub => sub._id == _id);
          project = project && project[0];
        }
        res.json({ project, featuredProjects });
      }).catch(errors => { return res.status(500).send({ errors }); });
    });
  } else {
    Project.find().sort('-dateAdded').exec((errors, projects) => {
      if (errors) {
        return res.status(500).send({ errors });
      }
      let project = projects.filter(sub => sub._id == req.params.id);
      project = project[0] && project[0] || {};
      const featuredProjects = projects.filter(sub => sub.isFeatured == true);
      res.json({ project, featuredProjects });
    });
  }
}

export function uploadFile(req, res) {
  if (!req.files)
    return res.status(400).send({errors: 'No files were uploaded.'});
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  const _uploadFile = req.files.uploadFile;
 
  let uniqueTmpfile = null;
  try {
    if (process.env.mode == 'local') {
      uniqueTmpfile = uniqueFilename('/upload/image', 'image');
    } else {
       uniqueTmpfile = uniqueFilename('/root/upload/image', 'image');
    }
  } catch (errors) {
    return res.status(500).send({errors});
  }
  uniqueTmpfile +=  '.jpg';
  // Use the mv() method to place the file somewhere on your server
  _uploadFile.mv(uniqueTmpfile, function(errors) {
    if (errors)
      return res.status(500).send({errors: errors});
      if (process.env.mode == 'local') {
        res.send(uniqueTmpfile.replace('\\upload', ''));
      } else {
        res.send(uniqueTmpfile.replace('/root/upload', ''));
      }
  });
}

export function uploadVideoFile(req, res) {
  if (!req.files)
    return res.status(400).send({errors: 'No files were uploaded.'});
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  const _uploadFile = req.files.uploadFile;
 
  let uniqueTmpfile = null;
  try {
    if (process.env.mode == 'local') {
      uniqueTmpfile = uniqueFilename('/upload/video', 'video');
    } else {
      uniqueTmpfile = uniqueFilename('/root/upload/video', 'video');
    }
  } catch (errors) {
    return res.status(500).send({errors});
  }
  uniqueTmpfile +=  '.mp4';
  // Use the mv() method to place the file somewhere on your server
  _uploadFile.mv(uniqueTmpfile, function(errors) {
    if (errors)
      return res.status(500).send({errors});
 
      if (process.env.mode == 'local') {
         res.send(uniqueTmpfile.replace('\\upload', ''));
      } else {
        res.send(uniqueTmpfile.replace('/root/upload', ''));
      }
  });
}

export function getFxRate(req, res) {
  fetch('https://api.kraken.com/0/public/Ticker?pair=ETHXBT,XLTCXXBT,XBTUSD', {
    headers: {
      'content-type': 'application/json',
       mode: 'no-cors',
    },
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    return res.send({
      ETH_BTC: json.result.XETHXXBT.a,
      LTC_BTC: json.result.XLTCXXBT.a,
      BTC_USD: json.result.XXBTZUSD.a,
    });
  });
}

/*
* Settings
*/

export function getSettings(req, res) {
  if (!req.decoded) {
    return res.status(403).send({ errors: req.err });
  }
  Setting.findOne().then(settings => {
    if (!settings) {
      settings = new Setting();
      settings.save((err, saved) => {
        if (err) {
          return res.status(401).send({ errors: err.message });
        }
        return res.send({ settings: saved });
      });
    }
    return res.send({ settings });
  }).catch(err => { return res.status(404).send({ errors: err.message }); });
}

export function updateSettings(req, res) {
  if (!req.decoded) {
    return res.status(403).send({ errors: req.err });
  }
  Setting.findOneAndUpdate({}, { $set: { referralPercent: req.body.settings.referralPercent } }, { upsert: true }, (err, model) => {
    if (err) {
      return res.status(503).send({ errors: err.message });
    }
    return res.send({ status: 'OK' });
  });
}
