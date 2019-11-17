const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, unique: true },
    salary: { type: Number, default: 0 },
    username: { type: String },
    googleId: { type: String },
    facebookId: { type: String },
    expense: [
        {
            type: Schema.Types.ObjectId,
            ref: "Expense"
        }
    ]
})


const User = mongoose.model("User", userSchema);
module.exports = User;