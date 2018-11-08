import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userID: { type: Schema.ObjectId, ref: 'User' },
  projectID: { type: Schema.ObjectId, ref: 'Project' },
  selectedTickets: { type: Number, default: 0, required: false },
  btcAddress: { type: String, required: false },
  ethAddress: { type: String, required: false },
  ltcAddress: { type: String, required: false },
  btcPrivateAddress: { type: String, required: false },
  ethPrivateAddress: { type: String, required: false },
  ltcPrivateAddress: { type: String, required: false },
  btcAmount: { type: Number, default: 0.0, required: false },
  ethAmount: { type: Number, default: 0.0, required: false },
  ltcAmount: { type: Number, default: 0.0, required: false },
  btcChangeAmount: { type: Number, default: 0.0, required: false },
  ethChangeAmount: { type: Number, default: 0.0, required: false },
  ltcChangeAmount: { type: Number, default: 0.0, required: false },
  btcTicketPrice: { type: Number, default: 0.0, required: false },
  ethTicketPrice: { type: Number, default: 0.0, required: false },
  ltcTicketPrice: { type: Number, default: 0.0, required: false },
  paidTickets: { type: Number, default: 0, required: false },
  status: { type: String, default: 'pending', required: true }, // pending, partial, full
  btctransactionID: { type: String, required: false },
  ethtransactionID: { type: String, required: false },
  ltctransactionID: { type: String, required: false },
  paidCoin: { type: String, default: 'BTC', required: false },
  dateAdded: { type: Date, default: Date.now, required: true },
  network: { type: String, default: 'testnet', required: true },
  type: { type: String, default: 'normal', require: false }, // normal: pay via website, transfer: transfer ticket
  ticketID: { type: String, default: '', require: false },
  datePaid: { type: Date, default: Date.now, required: false },
});

export default mongoose.model('Order', orderSchema);
