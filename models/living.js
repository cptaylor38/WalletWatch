const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LivingSchema = new Schema({
    title: {
        type: String
    },
    details: {
        type: String,
        living: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    amount: { type: Number },
    date: { type: Date, default: Date.now },
    recurring: { type: Boolean, default: false }
});

const Living = mongoose.model("Living", LivingSchema);

module.exports = Living;