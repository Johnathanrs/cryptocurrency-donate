import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const referralPaymentRequestSchema = new Schema({
  sender: { type: Schema.ObjectId, ref: 'User' },
  referred: { type: Schema.ObjectId, ref: 'User' },
  projectID: { type: Schema.ObjectId, ref: 'Project' },
  referralID: { type: Schema.ObjectId, ref: 'Order' },
  dateAdded: { type: Date, default: Date.now, required: true },
  status: { type: String, default: 'referred', required: false }, // "referred" by user, checked by admin, "Paid" by admin
});

export default mongoose.model('ReferralPaymentRequest', referralPaymentRequestSchema);
