import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const referralPaymentRequestSchema = new Schema({
  sender: { type: Schema.ObjectId, ref: 'User' },
  referred: { type: Schema.ObjectId, ref: 'User' },
  projectID: { type: Schema.ObjectId, ref: 'Project' },
  referralID: { type: Schema.ObjectId, ref: 'Order' },
  paidTickets: { type: Number, default: 0, required: true },
  btcTicketPrice: { type: Number, default: 0.0, required: true },
  datePaid: { type: Date, default: Date.now, required: true },
  status: { type: String, default: 'referred', required: false }, // "referred" by user, checked by admin, "Paid" by admin
});

export default mongoose.model('ReferralPaymentRequest', referralPaymentRequestSchema);
