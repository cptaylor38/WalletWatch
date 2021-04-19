const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema({
  title: {
    type: String,
    subscription: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  renewal_date: {
    type: Date,
  },
  url: {
    type: String,
  },
});

const Subscription = mongoose.model('Subscription', SubscriptionSchema);
module.exports = Subscription;
