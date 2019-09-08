const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FinancesSchema = new Schema({
    title: {
        type: String
    },
    details: {
        type: String,
        finances: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    amount: { type: Number },
    date: { type: Date, default: Date.now }
});

const Finances = mongoose.model("Finances", FinancesSchema);

module.exports = Finances;