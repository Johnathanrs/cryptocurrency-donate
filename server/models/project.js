import mongoose from 'mongoose';
import { Module } from 'module';
// require('mongoose-double')(mongoose);
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  country: { type: String, required: true },
  city: { type: String, required: true },
  lat: { type: String, required: true },
  lng: { type: String, required: true },
  postalCode: { type: String, required: false },
  location: { type: String, required: false },
});

const coinSchema = new Schema({
  address: { type: String, required: true },
});

const walletSchema = new Schema({
  BTC: coinSchema,
  ETH: coinSchema,
  LTC: coinSchema,
});

const projectSchema = new Schema({
  title: { type: String, required: true, max: 30 },
  subTitle: { type: String, default: '', required: true, max: 45 },
  ticketPriceInBTC: { type: Number, default: 0.0, required: true },
  ticketPriceInETH: { type: Number, default: 0.0, required: true },
  ticketPriceInLTC: { type: Number, default: 0.0, required: true },
  ticketPriceInUSD: { type: Number, default: 0.0, required: true },
  maximumAvailableTickets: { type: Number, default: 100, required: true },
  totalTickets: { type: Number, default: 1000, required: true },
  maximumAvailableTicketsPerPerson: { type: Number, default: 10, required: true },
  fundingDuration: { type: String, default: '2020-07-09', required: true },
  projectThumbnail: { type: String, default: '', required: true },
  images: { type: Array, required: true, max: 10 },
  address: addressSchema,
  video: { type: String, default: '', required: false },
  shortDescription: { type: String, default: '', required: true },
  fullDescription: { type: String, default: '', required: true },
  keyfacts: { type: Array, required: true, max: 8 },
  wallet: walletSchema,
  donatedBTC: { type: Number, default: 0.0, required: false },
  donatedLTC: { type: Number, default: 0.0, required: false },
  donatedETH: { type: Number, default: 0.0, required: false },
  totalMoneyInBTC: { type: Number, default: 0.0, required: false },
  totalMoneyInUSD: { type: Number, default: 0.0, required: false },
  donors: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Signuped up users
  isFeatured: { type: Boolean, default: false, required: true },
  startDate: { type: Date, default: Date.now, required: true },
  dateAdded: { type: Date, default: Date.now, required: true },
});

// module.exports = {
//   Project: mongoose.model('Project', projectSchema),
//   Address: mongoose.model('Address', addressSchema),
//   Wallet: mongoose.model('Wallet', walletSchema),
//   Coin: mongoose.model('Coin', coinSchema),
// };

export default mongoose.model('Project', projectSchema);
exports.Address = mongoose.model('Address', addressSchema);
exports.Wallet = mongoose.model('Wallet', walletSchema);
exports.Coin = mongoose.model('Coin', coinSchema);

