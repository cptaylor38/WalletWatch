const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, unique: true },
    username: { type: String },
    living: [
        {
            type: Schema.Types.ObjectId,
            ref: "Living"
        }
    ],
    travel: [
        {
            type: Schema.Types.ObjectId,
            ref: "Travel"
        }
    ],
    health: [
        {
            type: Schema.Types.ObjectId,
            ref: "Health"
        }
    ],
    leisure: [
        {
            type: Schema.Types.ObjectId,
            ref: "Leisure"
        }
    ],
    finances: [
        {
            type: Schema.Types.ObjectId,
            ref: "Finances"
        }
    ],
    income:
    {
        type: Number
    }
})


const User = mongoose.model("User", userSchema);
module.exports = User;