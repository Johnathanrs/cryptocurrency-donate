import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const referralSchema = new Schema({
  receiver: { type: String, required: true },
  field1: { type: String, required: true },
  field2: { type: String, required: true },
  isReferred: { type: Boolean, default: false, required: false },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  dateReferred: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Referral', referralSchema);
