const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LoanSchema = new Schema({
  servicer: {
    type: String,
    required: true,
  },
  due_date: {
    type: Date,
  },
  title: {
    type: String,
    loans: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  total: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
  },
  monthly_payment: {
    type: Number,
  },
  url: {
    type: String,
  },
  interest_rate: {
    type: Number,
  },
  paid: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Paid',
    },
  ],
});

const Loan = mongoose.model('Loan', LoanSchema);

module.exports = Loan;
