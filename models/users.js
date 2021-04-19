const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String, unique: true, sparse: true },
  salary: { type: Number, default: 0 },
  username: { type: String },
  googleId: { type: String },
  facebookId: { type: String },
  savings: { type: Number, default: 0 },
  utilities: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Utility',
    },
  ],
  prescriptions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Prescription',
    },
  ],
  subscriptions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Subscription',
    },
  ],
  nonRecurring: [
    {
      type: Schema.Types.ObjectId,
      ref: 'NonRecurring',
    },
  ],
  loans: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Loan',
    },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
