const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NonRecurringSchema = new Schema({
  category: {
    type: String,
  },
  title: {
    type: String,
    nonRecurring: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  purchase_date: { type: Date },
  amount: { type: Number, required: true },
  purchase_location: {
    type: String,
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
});

const NonRecurring = mongoose.model('NonRecurring', NonRecurringSchema);

module.exports = NonRecurring;
