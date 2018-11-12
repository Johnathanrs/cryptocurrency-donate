import mongoose from 'mongoose';
// var uniqueValidator = require('mongoose-unique-validator');
const uniqueValidator = require('mongoose-beautiful-unique-validation');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const subProjectSchema = new Schema({
  projectID: { type: Schema.ObjectId, ref: 'Project' },
  totalTickets: { type: Number, required: true },
  totalPrice: { type: Object, required: false },
  paidAmountBTC: { type: Number, default: 0.0, required: false },
  paidAmountLTC: { type: Number, default: 0.0, required: false },
  paidAmountETH: { type: Number, default: 0.0, required: false },
  paidTickets: { type: Number, default: 0.0, required: false },
  isFullPaid: { type: Boolean, default: false, required: false },
  dateAdded: { type: Date, default: Date.now, required: false },
  datePaid: { type: Date, required: false },
  btcAddress: { type: Object, required: false },
  ethAddress: { type: Object, required: false },
  ltcAddress: { type: Object, required: false },
});

const userSchema = new Schema({
  email: { type: String, lowercase: true, unique: 'Two users cannot share the same email ({VALUE})', required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
  fullName: { type: String, default: '', required: false },
  birthday: { type: String, default: '', required: false },
  nationality: { type: String, default: '', required: false },
  address: { type: String, default: '', required: false },
  phone: { type: String, default: '', required: false },
  payoutBTC: { type: String, default: '', required: false },
  payoutETH: { type: String, default: '', required: false },
  payoutLTC: { type: String, default: '', required: false },
  payoutForReferral: { type: String, default: '', required: false },
  ID: { type: String, default: '', required: false },
  subProjects: [subProjectSchema],
  hash: String,
  salt: String,
  role: String,
  referralIDs: { type: Schema.ObjectId, ref: 'Referral' },
  dateExpired: { type: Date, required: false },
  dateAdded: { type: Date, default: Date.now, required: true },
});

userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJWT = function() {
    // set expiration to 1 days
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 100);

  return jwt.sign({
    _id: this._id,
    exp: parseInt(exp.getTime() / 1000, 10),
  }, process.env.secret);
};

userSchema.methods.generateSimpleJWT = function() {
  // set expiration to 1 days
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 1);

  return jwt.sign({
    _id: this._id,
    exp: parseInt(exp.getTime() / 1000, 10),
  }, process.env.secret);
};

userSchema.methods.toAuthJSON = function() {
  return {
    email: this.email,
    role: this.role,
    token: this.generateJWT(),
  };
};

userSchema.plugin(uniqueValidator);

export default mongoose.model('User', userSchema);
exports.SubProject = mongoose.model('SubProject', subProjectSchema);
