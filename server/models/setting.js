import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const settingsSchema = new Schema({
  referralPercent: { type: Number, default: 5.0, required: false },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Setting', settingsSchema);
