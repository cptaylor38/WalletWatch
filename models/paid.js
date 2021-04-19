const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PaidSchema = new Schema({
  payment: { type: Boolean },
  date: { type: Date },
});

const Paid = mongoose.model('Paid', PaidSchema);

module.exports = Paid;
