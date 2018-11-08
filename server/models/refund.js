import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const refundSchema = new Schema({
  userID: { type: Schema.ObjectId, ref: 'User' },
  orderID: { type: Schema.ObjectId, ref: 'Order' },
  dateAdded: { type: Date, default: Date.now, required: true },
  status: { type: String, default: 'pending', required: false },
});

export default mongoose.model('Refund', refundSchema);
