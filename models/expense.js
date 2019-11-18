const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    category: {
        type: String
    },
    monthly: { type: Boolean },
    date: { type: Date },
    amount: { type: Number },
    title: {
        type: String,
        expense: { type: Schema.Types.ObjectId, ref: 'User' }
    }
});

const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;