const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HealthSchema = new Schema({
    title: {
        type: String
    },
    details: {
        type: String,
        health: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    amount: { type: Number },
    date: { type: Date, default: Date.now }
});

const Health = mongoose.model("Health", HealthSchema);

module.exports = Health;