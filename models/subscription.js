const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema({
  category: {
    type: String,
  },
  title: {
    type: String,
    subscription: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  amount: {
    type: Number,
  },
  renewal_date: {
    type: Date,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
});

const Subscription = mongoose.model('Subscription', SubscriptionSchema);
module.exports = Subscription;
