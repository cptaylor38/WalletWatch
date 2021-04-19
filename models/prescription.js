const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({
  title: {
    type: String,
    prescription: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  drug_name: {
    type: String,
  },
  treatment: {
    type: String,
  },
  copay: {
    type: Number,
  },
  pharmacy_name: {
    type: String,
  },
  purchase_date: {
    type: Date,
  },
  day_supply: {
    type: Number,
  },
  recurring_prescription: {
    type: Boolean,
  },
  url: {
    type: String,
  },
});

const Prescription = mongoose.model('Prescription', PrescriptionSchema);
module.exports = Prescription;
