const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, unique: true },
    salary: { type: Number, default: 0 },
    username: { type: String },
    googleId: { type: String },
    facebookId: { type: String },
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
    ]
})


const User = mongoose.model("User", userSchema);
module.exports = User;