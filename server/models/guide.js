import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const guideSchema = new Schema({
  image: { type: String, required: false },
  faqs: { type: Array, required: true },
  dateAdded: { type: Date, default: Date.now, required: true },
});

export default mongoose.model('Guide', guideSchema);
