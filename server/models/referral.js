import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const referralSchema = new Schema({
  sender: { type: Schema.ObjectId, ref: 'User' },
  projectID: { type: Schema.ObjectId, ref: 'Project' },
  receiver: { type: String, required: true },
  field1: { type: String, required: true },
  field2: { type: String, required: true },
  isReferred: { type: Boolean, default: false, required: false },
  paidAmount: { type: Number, default: 0.0, required: false },
  dateAdded: { type: Date, default: Date.now, required: true },
  dateReferred: { type: Date, required: false },
  datePaid: { type: Date, required: false },
});

export default mongoose.model('Referral', referralSchema);
