import Post from '../models/post';
import Project, { Address, Wallet, Coin} from '../models/project';
import User, { SubProject } from '../models/user';
import Guide from '../models/guide';
import Order from '../models/order';

import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';
var uniqueFilename = require('unique-filename');
const generator = require('generate-password');
const fileUpload = require('express-fileupload');
const sgMail = require('@sendgrid/mail');
import sensitive from '../sensitive';
const bitcoinTransaction = require('../util/btctransaction');
const ltcTransaction = require('../util/ltctransaction');
const ethTransaction = require('../util/ethtransaction');

import { Router } from 'express';
const router = new Router();

import passport from '../passport';

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
        donatedLTC += utxos[i]['satoshis'];
      }
    }
    project.donatedLTC = parseFloat(donatedLTC);
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
  User.find().sort('-dateAdded').exec((errors, users) => {
    if (errors) {
      res.status(500).send({ errors });
    }
    res.json({ users });
  });
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

export function getOrders(req, res) {
  if (!req.decoded) {
    return res.status(400).send({ errors: 'Bad Request' });
  }
  Order.find().sort('-dateAdded').populate('projectID').exec((errors, orders) => {
    if (errors) {
      res.status(500).send({ errors });
    }
    res.json({ orders });
  });
}

export function getUser(req, res) {
  Promise.all([
    User.findById( req.decoded),
    Project.find(),
  ]).then(data => {
    if (!data[0]) { return res.send({ errors: 'Unauthorized user' }); }
    return res.json({ user: data[0], projects: data[1] });
  }).catch(err => { return res.send({ errors: err.message }); });
}

export function updateUser(req, res, next) {
  User.findById(req.body.id).then(function(user) {
    if (!user) { return res.status(401).send({errors: 'Unauthorized user'}); }

    if (typeof req.body.user.email !== 'undefined') {
      user.email = req.body.user.email;
    }
    
    if (typeof req.body.user.password !== 'undefined') {
      user.setPassword(req.body.user.password);
    }

    return user.save().then(function() {
      return res.json({ user: user.toAuthJSON() });
    });
  }).catch(next);
}

export function signin(req, res, next) {
  if (!req.body.user.email) {
    return res.status(422).json({ errors: { email: "can't be blank" } });
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
      return done(err);
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
      return done({ errors: err.message });
  });
}

export function customerSignup(req, res) {
  User.findOne({ email: req.body.user.email })
  .then(user => {
    if (user) {
      return res.status(422).json({ errors: 'User width this email already exists' });
    }
    const newUser = new User();
    newUser.email = req.body.user.email;
    newUser.role = 'Customer';
    const newPassword = generator.generate({
      length: 10,
      numbers: true,
    });
    newUser.setPassword(newPassword);
  
    return newUser.save((err, saved) => {
      sgMail.setApiKey(sensitive.sendgrid);
      const msg = {
        to: saved.email,
        from: 'info@smartprojects.tech',
        subject: 'Authentication',
        text: 'Congratulation! You successfully signed up. Your password is ' + newPassword,
        html: '<div><strong>Congratulation</strong><p>You successfully signed up. Your password is ' + newPassword + '<p></div>',
      };
      sgMail.send(msg).then((statusMessage) => {
        return res.json({ user: newUser.toAuthJSON() });
      });
    });
  }).catch(err => { return res.send({ errors: err.message }); });
}

export function authCheck(req, res) {
  if (!req.decoded) {
    return res.send({ status: 'unauthorized' });
  }
  User.findOne({ _id: req.decoded })
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
  User.findOne({ _id: req.decoded, email: 'veselin.mitrovic@outlook.com' })
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
    return res.send({ status: 'unauthorized' });
  }

  if (!req.body.ticket.projectID) {
    return res.status(400).send({ errors: 'Bad request.' });
  }

  // req.decoded = user.id
  User.findOne({ _id: req.decoded })
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

function sendEmail(to, text, html) {

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
    sgMail.setApiKey(sensitive.sendgrid);
    const newPassword = generator.generate({
      length: 10,
      numbers: true,
    });
    const msg = {
      to: req.body.user.email,
      from: 'info@smartprojects.tech',
      subject: 'Authentication',
      text: 'Congratulation! You successfully signed up. Your password is ' + newPassword,
      html: '<div><strong>Congratulation</strong><p>You successfully signed up. Your password is ' + newPassword + '<p></div>',
    };
    sgMail.send(msg).then((statusMessage) => {
      const newUser = new User();
      newUser.email = req.body.user.email;
      newUser.role = 'Customer';
      newUser.setPassword(newPassword);
      return updateUserAndOrder(res, newUser, req.body.ticket.projectID, req.body.ticket.totalTickets, req.body.ticket.ticketPrice.BTC, req.body.ticket.ticketPrice.ETH, req.body.ticket.ticketPrice.LTC, req.body.ticket.totalPrice.BTC, req.body.ticket.totalPrice.ETH, req.body.ticket.totalPrice.LTC);
    });
  }).catch(err => { return res.send({ errors: err.message }); });
}

function updateOrderAndProject(paidTickets, order, project, txid, paidCoin) {
  if (paidTickets > 0) {
    order.paidTickets = paidTickets;
    console.log(order.ltcAmount, '--', order.btcAmount, ' ---', order.ethAmount);
    order.datePaid = new Date();
    order.status = 'paid';
    order.paidCoin = paidCoin;

    project.maximumAvailableTickets = project.maximumAvailableTickets - paidTickets;

    return Promise.all([
      order.save(),
      project.save(),
    ]).then((err, data) => {
      console.log(err, data);
    });
  }
}

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
      project.donors.push(order.userID);

      let paidTickets = 0;
      if (order.ethAmount) {
        paidTickets += Math.round((order.ethAmount) / order.ethTicketPrice);
        ethTransaction.sendTransaction(order.ethAddress, order.ethPrivateAddress, project.wallet.ETH.address, order.ethAmount).then(txid => {
          if (txid) {
            console.log(txid);
          }
          updateOrderAndProject(paidTickets, order, project, txid, 'ETH');
        }).catch(err => {console.log('eth transaction', err.message); });
      }

      // BTC transaction
      if (order.btcAmount) {
        paidTickets += Math.round((order.btcAmount) / order.btcTicketPrice);
        const fee = bitcoinTransaction.getTransactionSize(ninputs, 1);
        const amount = order.btcAmount * bitcoinTransaction.BITCOIN_SAT_MULT;
        if (amount <= fee) {
          console.log('error balance is less than fee ---- btcAmount ', order.btcAmount, ' --- fee ', fee);
        } else {
          bitcoinTransaction.doTransaction({
            utxos: btcUtxos,
            to: project.wallet.BTC.address,
            privateKey: order.btcPrivateAddress,
            amount: order.btcAmount,
            fee: fee,
          }).then(msg => {
            console.log(msg);
            if (msg.err) {
              console.log(msg.err);
            } else if (msg.statusCode == 200 || msg.status == 'OK') { // 200 for blockchain  'OK' for Omni
              updateOrderAndProject(paidTickets, order, project, '', 'BTC');
            }
          }).catch(err => { console.log('btc transaction ', err.message); });
        }
      }

      // LTC transaction
      if (order.ltcAmount) {
        paidTickets += Math.round((order.ltcAmount) / order.ltcTicketPrice);
        const feeLTC = 0.00077; //fee for the tx
        if (order.ltcAddress < feeLTC) {
          console.log('error balance is less than fee ---- amount ', order.ltcAmount, ' --- fee ', feeLTC);
        } else {
          ltcTransaction.sendTransaction(utxos, project.wallet.LTC.address, (order.ltcAmount - feeLTC), feeLTC, order.ltcPrivateAddress)
          .then(msg => {
            if (msg) {
              console.log(msg);
            }
            updateOrderAndProject(paidTickets, order, project, '', 'LTC');
          }).catch(err => { console.log('ltc transaction', err.message); });
        }
      }
    });
  }).catch(err => { console.log('balance check for user address', err.message); });
}

export function checkBalanceFromFront(req, res) {
  if (!req.decoded) {
    return res.status(400).send({ errors: 'Bad request' });
  }
  Order.findOne({ _id: req.body.orderID }).exec((err, order) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (order.status == 'paid') {
      if (order.totalTickets > order.paidTickets) {
        return res.send({ status: 'less', paidTickets: order.paidTickets, btcAmount: order.btcAmount, ethAmount: order.ethAmount, ltcAmount: order.ltcAmount, paidCoin: order.paidCoin });
      }
      return res.send({ status: 'ok', paidTickets: order.paidTickets, btcAmount: order.btcAmount, ethAmount: order.ethAmount, ltcAmount: order.ltcAmount, paidCoin: order.paidCoin });
    }
    return res.send({ status: 'again' });
  });
}

export function userCoinBalanceChecker(req, res) {
  Order.find({ status: 'pending', network: process.env.BTCNET }).exec((errors, orders) => {
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

  const project = req.body.project;
  const newObject = new Project(project);
  const wallet = new Wallet(project);
  const coin = new Coin(project);
  coin.address = project.coin_BTC;
  wallet.BTC = coin;
  coin.address = project.coin_ETH;
  wallet.ETH = coin;
  coin.address = project.coin_LTC;
  wallet.LTC = coin;
  const address = new Address(project);
  address.country = project.country;
  address.city = project.city;
  address.postalCode = project.postal_code;

  // Let's sanitize inputs
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
  newObject.address = address;
  newObject.video = project.video;
  newObject.keyfacts = project.key_facts;
  newObject.wallet = wallet;
  newObject.totalMoneyInBTC = project.total_money_in_BTC;
  newObject.totalMoneyInUSD = project.total_money_in_USD;
  newObject.totalTickets = project.total_tickets;
  newObject.donors = [];
  newObject.shortDescription = project.short_description;
  newObject.fullDescription = project.long_description;
  // newObject.location = project.location;
  newObject.save((errors, saved) => {
    if (errors) {
      res.status(500).send({errors});
    } else {
      res.json({ project: saved });
    }
  });
}

export function updateProject(req, res) {
  if (!req.body.project._id) {
    res.status(403).end();
  } else {
    Project.findOne({ _id: req.body.project._id }).exec((errors, newObject) => {
      if (errors) {
        res.status(500).send({ errors: errors });
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
        newObject.address.country = project.country;
        newObject.address.city = project.city;
        newObject.video = project.video;
        newObject.keyfacts = project.key_facts;
        newObject.wallet.BTC.address = project.coin_BTC;
        newObject.wallet.ETH.address = project.coin_ETH;
        newObject.wallet.LTC.address = project.coin_LTC;
        newObject.totalMoneyInBTC = project.total_money_in_BTC;
        newObject.totalMoneyInUSD = project.total_money_in_USD;
        newObject.totalTickets = project.total_tickets;
        newObject.shortDescription = project.short_description;
        newObject.fullDescription = project.long_description;
        // newObject.location = project.location;
        newObject.save((err1, saved) => {
          if (err1) {
            res.status(500).send({ errors: err1});
          } else {
            res.json({ project: 'success' });
          }
        });
      }
    });
  }
}

export function deleteProject(req, res) {
  if (!req.body._id) {
    res.status(403).send({errors: 'something wrong happened'});
  } else {
    Project.deleteOne({ _id: req.body._id }).exec((err, obj) => {
      res.json({ obj });
    });
  }
}

export function getProjects(req, res) {
  Project.find().sort('-dateAdded').populate('donors').exec((errors, projects) => {
    if (errors) {
      return res.status(500).send({errors});
    }
    res.json({ projects });
  });
}

export function getProject(req, res) {
  if (req.params.id == 'undefined' || req.params.id == 'null') {
    Project.findOne().sort('-dateAdded').populate('donors').exec((errors, project) => {
      if (errors) {
        return res.status(500).send({errors});
      }
      res.json({ project });
    });
  } else {
    Project.findOne({ _id: req.params.id }).exec((errors, project) => {
      if (errors) {
        return res.status(500).send({ errors });
      }
      res.json({ project });
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
