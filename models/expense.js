const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    category: {
        type: String
    },
    details: {
        type: String,
        expense: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    amount: { type: Number },
    date: { type: Date, default: Date.now },
    recurring: { type: Boolean, default: false }
});

const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;