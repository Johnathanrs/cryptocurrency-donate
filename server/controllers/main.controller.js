import Post from '../models/post';
import Project from '../models/project';
import User, { SubProject } from '../models/user';

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

export function balanceChecker() {
  Project.Project.find().sort('-dateAdded').exec((errors, projects) => {
    if (errors) {
      return console.log(errors);
    }
    projects.map(project => {
      const ethAddr = project.wallet.ETH.address;
      const btcAddr = project.wallet.BTC.address;
      const ltcAddr = project.wallet.LTC.address;
      let ltcNetwork = 'LTCTEST';
      if (process.env.LTCNET == 'mainnet') {
        ltcNetwork = 'LTC';
      }
      Promise.all([
        ethTransaction.getBalance(ethAddr),
        bitcoinTransaction.getBalance(btcAddr, { network: process.env.BTCNET }),
        ltcTransaction.getBalance(ltcAddr, ltcNetwork),
      ]).then(data => {
        project.donatedETH = parseFloat(data[0]);
        project.donatedBTC = parseFloat(data[1]);
        project.donatedLTC = parseFloat(data[2]);
        project.save((err, saved) => {
          if (err) {
            console.log(err.message);
          }
          // console.log(saved);
        });
      }).catch(err => {
        console.log(err.message);
      });
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

export function getUser(req, res) {
  Promise.all([
    User.findById( req.decoded),
    Project.Project.find(),
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

  User.findOne({'email': req.body.user.email})
  .then(user => {
    if(!user) {
      return res.status(422).json({errors: 'User does not exist'});
    }
    else {
      if (user.validPassword(req.body.user.password)) {
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
      const newUser = new User();

      newUser.email = req.body.user.email;
      newUser.role = 'Customer';
      const newPassword = req.body.user.password;
      newUser.setPassword(newPassword);
    
      newUser.save((err, saved) => {
        sgMail.setApiKey(sensitive.sendgrid);
        const msg = {
          to: saved.email,
          from: 'info@smartprojects.tech',
          subject: 'Authentication',
          text: `Congratulation! You successfully signed up. Your password is ${newPassword}`,
          html: `<div><strong>Congratulation</strong><p>You successfully signed up. Your password is ${newPassword} <p></div>`,
        };
        sgMail.send(msg).then((statusMessage) => {
          return res.json({ user: saved.toAuthJSON(), isNewUser: true });
        });
      }).catch(next);
    }
    else {
      if (user.validPassword(req.body.user.password)) {
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

export function customerSignup(req, res) {
  User.findOne({ email: req.body.user.email })
  .then(user => {
    if (user) {
      return res.status(422).json({ errors: 'User width this email already exists' });
    } else {
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
    }
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

export function getNow(req, res) {
  if (!req.decoded) {
    return res.send({ status: 'unauthorized' });
  }

  if (!req.body.ticket.projectID) {
    return res.status(400).send({ errors: 'Bad request.' });
  }

  // req.decoded = user.id
  User.findOne({ _id: req.decoded })
  .then(user => {
    if (user) { // User exists
      const btcAddress = bitcoinTransaction.createUserBitcoinAddress();
      const ltcAddress = ltcTransaction.createUserLitecoinAddress();
      const ethAddress = ethTransaction.createUserEthereumAddress();
      const _newSubProject = new SubProject();
      _newSubProject.projectID = req.body.ticket.projectID;
      _newSubProject.totalTickets = req.body.ticket.totalTickets;
      _newSubProject.totalPrice = req.body.ticket.totalPrice;
      _newSubProject.btcAddress = btcAddress;
      _newSubProject.ethAddress = ethAddress;
      _newSubProject.ltcAddress = ltcAddress;
      _newSubProject.paidAmountBTC = 0;
      _newSubProject.paidAmountLTC = 0;
      _newSubProject.paidAmountETH = 0;
      if (!user.subProjects) {
        user.subProjects = [];
      }
      user.subProjects.push(_newSubProject);
      user.save((err, saved) => {
        if (err) {
          return res.send({ errors: err.message });
        } else {
          return res.send({
            status: 'authorized',
            id: _newSubProject.id,
            token: saved.generateJWT(),
            crypto: {
              BTC: {
                address: btcAddress,
                amount: _newSubProject.totalPrice['BTC'],
                message: _newSubProject.totalPrice['BTC'] + ' BTC Donation to ',
              },
              ETH: {
                address: ethAddress,
                amount: _newSubProject.totalPrice['ETH'],
                message: _newSubProject.totalPrice['ETH'] + ' ETH Donation to ',
              },
              LTC: {
                address: ltcAddress,
                amount: _newSubProject.totalPrice['LTC'],
                message: _newSubProject.totalPrice['LTC'] + ' LTC Donation to ',
              },
            },
          });
        }
      });
    } else { // Something is wrong
      return res.send({ status: 'unauthorized' });
    }
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

export function userSignup(req, res) {
  if (!req.body.user.email) {
    return res.status(401).send('Request has no email in body');
  }
  User.findOne({ email: req.body.user.email })
  .then(user => {
    const btcAddress = bitcoinTransaction.createUserBitcoinAddress();
    const ethAddress = ethTransaction.createUserEthereumAddress();
    const ltcAddress = ltcTransaction.createUserLitecoinAddress();
    const _newSubProject = new SubProject();
    _newSubProject.projectID = req.body.ticket.projectID;
    _newSubProject.totalTickets = req.body.ticket.totalTickets;
    _newSubProject.totalPrice = req.body.ticket.totalPrice;
    _newSubProject.btcAddress = btcAddress;
    _newSubProject.ltcAddress = ltcAddress;
    _newSubProject.ethAddress = ethAddress;
    _newSubProject.paidAmountBTC = 0;
    _newSubProject.paidAmountLTC = 0;
    _newSubProject.paidAmountETH = 0;
    if (user) { // User already signed up
      if (!user.subProjects) {
        user.subProjects = [];
      } 
      user.subProjects.push(_newSubProject);
      user.save((err, saved) => {
        if (err) {
          return res.send({ errors: err.message });
        } else {
          return res.send({
            isNewUser: false,
            isMsgSent: false,
            token: saved.generateJWT(),
            id: _newSubProject.id,
            crypto: {
              BTC: {
                address: btcAddress,
                amount: _newSubProject.totalPrice.BTC,
                message: _newSubProject.totalPrice.BTC + ' BTC Donation to ',
              },
              ETH: {
                address: ethAddress,
                amount: _newSubProject.totalPrice.ETH,
                message: _newSubProject.totalPrice.ETH + ' ETH Donation to ',
              },
              LTC: {
                address: ltcAddress,
                amount: _newSubProject.totalPrice.LTC,
                message: _newSubProject.totalPrice.LTC + ' LTC Donation to ',
              },
            },
          });
        }
      });
    } else { // New user signed up and send an email with password
      const newUser = new User();

      newUser.email = req.body.user.email;
      newUser.role = 'Customer';
      newUser.subProjects = [_newSubProject];
      const newPassword = generator.generate({
        length: 10,
        numbers: true,
      });
      newUser.setPassword(newPassword);
    
      newUser.save((err, saved) => {
        sgMail.setApiKey(sensitive.sendgrid);
        const msg = {
          to: saved.email,
          from: 'info@smartprojects.tech',
          subject: 'Authentication',
          text: 'Congratulation! You successfully signed up. Your password is ' + newPassword,
          html: '<div><strong>Congratulation</strong><p>You successfully signed up. Your password is ' + newPassword + '<p></div>',
        };
        sgMail.send(msg).then((statusMessage) => {
          return res.send({
            isNewUser: true,
            isMsgSent: true,
            token: saved.generateJWT(),
            id: _newSubProject.id,
            crypto: {
              BTC: {
                address: btcAddress,
                amount: _newSubProject.totalPrice['BTC'],
                message: _newSubProject.totalPrice['BTC'] + ' BTC Donation to ',
              },
              ETH: {
                address: ethAddress,
                amount: _newSubProject.totalPrice['ETH'],
                message: _newSubProject.totalPrice['ETH'] + ' ETH Donation to ',
              },
              LTC: {
                address: ltcAddress,
                amount: _newSubProject.totalPrice['LTC'],
                message: _newSubProject.totalPrice['LTC'] + ' LTC Donation to ',
              },
            },
          });
        }).catch((err) => {
          return res.send({ errors: 'Fail to authenticate the user with this email' });
        });
      });
    }
  }).catch(err => { return res.send({ errors: err.message }); });
}

export function checkETHBalance(req, res) {
  if (!req.body.crypto) {
    return res.status(400).send({ errors: 'Address is missing' });
  }

  ethTransaction.getBalance(req.body.crypto.ETH.address.publicKey).then(balance => {
    if (balance) {
      const paidTickets = Math.round((balance) / req.body.ticketPrice.ETH);
        if (paidTickets < 1) {
          return res.send({ status: 'less', paidTickets: paidTickets, amount: balance / req.body.ticketPrice.ETH });
        } else {
          // Update paidAmount field of sub project of user collection
          User.findOne({ _id: req.decoded })
          .then(user => {
            if (user) {
              const subProject = user.subProjects.find(sub => sub._id == req.body.subID);
              if (!subProject) {
                return res.status(404).send({ errors: `Project with ID ${req.body.projectID} does not exist` });
              }
              subProject.paidAmountETH = balance;
              subProject.datePaid = new Date();
              subProject.paidTickets = paidTickets;
              user.save((err, saved) => {
                if (err) {
                  return res.status(503).send({ errors: err.message });
                }
                // Creat transaction to the Project address.
                Project.Project.findOne({ _id: req.body.projectID }).then(project => {
                  if (!project) {
                    return res.status(404).send({ errors: res.message });
                  }
                  project.maximumAvailableTickets = project.maximumAvailableTickets - paidTickets;
                  project.donors.push(saved._id);
                  project.save((err, saved) => {
                    if (err) { return res.status(400).send({ errors: err.message }); }
                    return res.send({ status: 'ok', paidTickets: paidTickets, paidAmount: subProject.paidAmountETH, availableTickets: saved.maximumAvailableTickets });
                  });
                  const privateKeyWIF = subProject.ethAddress.privateKey;
                  const from = subProject.ethAddress.publicKey;
                  ethTransaction.sendTransaction(from, privateKeyWIF, project.wallet.ETH.address, balance).then(txid => {
                    if (txid) {
                      console.log(txid);
                    }
                  }).catch(err => { console.log(err); });
                });
              });
            }
          });
        }
    } else {
      return res.send({ status: 'again' });
    }
  }).catch(err => { return res.send({ errors: err.message }); });
}

export function checkLTCBalance(req, res) {
  if (!req.body.crypto) {
    return res.status(400).send({ errors: 'Address is missing' });
  }
  ltcTransaction.getUTXOs(req.body.crypto.LTC.address.publicKey, process.env.LTCNET)
    .then((utxos) => {
      let balance = 0;
      var fee = bitcoinTransaction.BITCOIN_SAT_MULT * 0.00077; //fee for the tx
      for (let i = 0; i < utxos.length; i++) {
        if (utxos[i].confirmations > 0) {
          balance += utxos[i]['satoshis'];
        }
      } //add up the balance in satoshi format from all utxos
      if (balance > 0) {
        const paidTickets = Math.round((balance) / req.body.ticketPrice.LTC / bitcoinTransaction.BITCOIN_SAT_MULT);
        if (paidTickets < 1) {
          return res.send({ status: 'less', paidTickets: paidTickets, amount: balance / req.body.ticketPrice.LTC });
        } else {
          // Update paidAmount field of sub project of user collection
          User.findOne({ _id: req.decoded })
          .then(user => {
            if (user) {
              const subProject = user.subProjects.find(sub => sub._id == req.body.subID);
              if (!subProject) {
                return res.status(404).send({ errors: `Project with ID ${req.body.projectID} does not exist` });
              }
              subProject.paidAmountLTC = balance / bitcoinTransaction.BITCOIN_SAT_MULT;
              subProject.datePaid = new Date();
              subProject.paidTickets = paidTickets;
              user.save((err, saved) => {
                if (err) {
                  return res.status(503).send({ errors: err.message });
                }
                // Creat transaction to the Project address.
                Project.Project.findOne({ _id: req.body.projectID }).then(project => {
                  if (!project) {
                    return res.status(404).send({ errors: res.message });
                  }
                  project.maximumAvailableTickets = project.maximumAvailableTickets - paidTickets;
                  project.donors.push(saved._id);
                  project.save((err, saved) => {
                    if (err) { return res.status(400).send({ errors: err.message }); }
                    return res.send({ status: 'ok', paidTickets: paidTickets, paidAmount: subProject.paidAmountLTC, availableTickets: saved.maximumAvailableTickets });
                  });
                  const privateKeyWIF = subProject.ltcAddress.privateKey;
                  try {
                    ltcTransaction.sendTransaction(utxos, project.wallet.LTC.address, (balance - fee), fee, privateKeyWIF)
                    .then(msg => {
                      if (msg) {
                        console.log(msg);
                      }
                    }).catch(err => { console.log(err); });
                  } catch (err) { 
                    console.log('err while transfering LTC', err.message);
                  };
                });
              });
            }
          });
        }
      } else {
        return res.send({ status: 'again' });
      }
    })
    .catch((err) => {
      return res.send({ errors: err.message });
    });
}

export function checkBTCBalance(req, res) {
  if (!req.body.crypto) {
    return res.status(400).send({ errors: 'Address is missing' });
  }

  Promise.all([
    bitcoinTransaction.getBalance(req.body.crypto.BTC.address.publicKey, { network: process.env.BTCNET }),
    bitcoinTransaction.getFees(bitcoinTransaction.providers.fees[process.env.BTCNET].default, 'fastest')
  ])
  .then((data) => {
    const balanceInBTC = data[0];
    const feeBTC = data[1] / bitcoinTransaction.BITCOIN_SAT_MULT;
    // const feeBTC = 300;
    if (balanceInBTC) {
      const paidTickets = Math.round((balanceInBTC) / req.body.ticketPrice.BTC);
      if (paidTickets < 1) {
        return res.send({ status: 'less', paidTickets: paidTickets, amount: balanceInBTC });
      } else {
        // Update paidAmount field of sub project of user collection
        User.findOne({ _id: req.decoded })
        .then(user => {
          if (user) {
            const subProject = user.subProjects.find(sub => sub._id == req.body.subID);
            if (!subProject) {
              return res.status(404).send({ errors: `Project with ID ${req.body.projectID} does not exist` });
            }
            subProject.paidAmountBTC = balanceInBTC;
            subProject.datePaid = new Date();
            subProject.paidTickets = paidTickets;
            user.save((err, saved) => {
              if (err) {
                return res.status(503).send({ errors: err.message });
              }
              // Creat transaction to the Project address.
              Project.Project.findOne({ _id: req.body.projectID }).then(project => {
                if (!project) {
                  return res.status(404).send({ errors: res.message });
                }
                try {
                  bitcoinTransaction.sendTransaction({
                    from: subProject.btcAddress.publicKey,
                    to: project.wallet.BTC.address,
                    privKeyWIF: subProject.btcAddress.privateKey,
                    btc: subProject.paidAmountBTC - feeBTC,
                    network: process.env.BTCNET,
                    pushtxProvider: bitcoinTransaction.providers.pushtx[process.env.BTCNET].omni,
                  }).then(msg => {
                    console.log(msg);
                    project.maximumAvailableTickets = project.maximumAvailableTickets - paidTickets;
                    project.donors.push(saved._id);
                    project.save((err, saved) => {
                      if (err) { return res.status(400).send({ errors: err.message }); }
                      return res.send({ status: 'ok', paidTickets: paidTickets, paidAmount: subProject.paidAmountBTC, availableTickets: saved.maximumAvailableTickets });
                    });
                  });
                } catch(err) { 
                  return res.status(503).send({ errors: err.message }); 
                };
              });
            });
          } else {
            res.status(400).send({ errors: 'Bad Request' });
          }
        });
      }
    } else {
      return res.send({ status: 'again' });
    }
  }).catch(err => { 
    return res.status(503).send({ errors: err.message });
  });
}

export function checkBalance(req, res) {
  if (!req.body.crypto) {
    return res.status(400).send({ errors: 'Address is missing' });
  }
  // checkBTCBalance(req, res);
  // checkLTCBalance(req, res);
}

export function getCryptoAddr(req, res) {
  if (!req.params.email) {
    return res.status(401).send({ errors: 'You are not authorized to do this action' });
  }
  User.findOne({ email: req.params.email })
    .then(user => {
      user.subProjects.map(subProject => {
        if (subProject.projectID == req.params.projectID) {
          // const btcKeyPair = bitcoin.ECPair.makeRandom();
          // const { btcAddress } = bitcoin.payments.p2pkh(({ pubkey: btcKeyPair.publicKey }));
          // return res.send({
          //   crypto: {
          //     ticket: {
          //       subProject,
          //     },
          //     btc: {
          //       publicKey: btcAddress,
          //     },
          //   },
          // });
        }
      });
    });
}

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getPosts(req, res) {
  Post.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ posts });
  });
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((errors, post) => {
    if (errors) {
      res.status(500).send({errors});
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}

/**
 * Get the help
 */

export function createProject(req, res) {
  if (!req.body.project.title) {
    res.status(403).send({ errors: 'something wrong happened' });
    return;
  }

  const project = req.body.project;
  const newObject = new Project.Project(project);
  const wallet = new Project.Wallet(project);
  const coin = new Project.Coin(project);
  coin.address = project.coin_BTC;
  wallet.BTC = coin;
  coin.address = project.coin_ETH;
  wallet.ETH = coin;
  coin.address = project.coin_LTC;
  wallet.LTC = coin;
  const address = new Project.Address(project);
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
    Project.Project.findOne({ _id: req.body.project._id }).exec((errors, newObject) => {
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
    Project.Project.deleteOne({ _id: req.body._id }).exec((err, obj) => {
      res.json({ obj });
    });
  }
}



export function getProjects(req, res) {
  Project.Project.find().sort('-dateAdded').populate('donors').exec((errors, projects) => {
    if (errors) {
      return res.status(500).send({errors});
    }
    res.json({ projects });
  });
}

export function getProject(req, res) {
  if (req.params.id == 'undefined' || req.params.id == 'null') {
    Project.Project.findOne().sort('-dateAdded').populate('donors').exec((errors, project) => {
      if (errors) {
        return res.status(500).send({errors});
      }
      res.json({ project });
    });
  } else {
    Project.Project.findOne({ _id: req.params.id }).exec((errors, project) => {
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
