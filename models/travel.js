const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TravelSchema = new Schema({
    title: {
        type: String
    },
    details: {
        type: String,
        travel: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    amount: { type: Number },
    date: { type: Date, default: Date.now }
});

const Travel = mongoose.model("Travel", TravelSchema);

module.exports = Travel;