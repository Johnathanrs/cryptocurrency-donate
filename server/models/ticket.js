import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  userId: { type: Schema.ObjectId, ref: 'User' },
  projectId: { type: Schema.ObjectId, ref: 'Project' },
  orderId: { type: Schema.ObjectId, ref: 'Order' },
  cuid: { type: 'String', required: true },
  dateAdded: { type: Date, default: Date.now, required: true },
  dateTransferred: { type: Date, required: false },
  status: { type: String, default: 'valid', required: false },
  transferredEmail: { type: String, required: false },
});

export default mongoose.model('Ticket', ticketSchema);
