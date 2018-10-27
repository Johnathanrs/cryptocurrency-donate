import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  userID: { type: Schema.ObjectId, ref: 'User' },
  projectID: { type: Schema.ObjectId, ref: 'Project' },
  orderID: { type: Schema.ObjectId, ref: 'Order' },
  dateAdded: { type: Date, default: Date.now, required: true },
  dateTransferred: { type: Date, required: false },
  status: { type: String, default: 'valid', required: false },
  transferredEmail: { type: String, required: false },
});

export default mongoose.model('Ticket', ticketSchema);
