const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UtilitySchema = new Schema({
  title: {
    type: String,
    utility: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  company_name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  due_date: {
    type: Date,
  },
  url: {
    type: String,
  },
});

const Utility = mongoose.model('Utility', UtilitySchema);
module.exports = Utility;
