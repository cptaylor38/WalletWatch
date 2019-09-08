const db = require("../models");

module.exports = {

    delete: function (req, res) {
        db.Travel.deleteOne({ _id: req.params.id })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    },


    create: function (req, res) {
        const travelExpense = { title: req.body.title, body: req.body.body };
        db.Travel
            .create(travelExpense)
            .then(function (dbTravel) {
                return db.User.findOneAndUpdate({ _id: req.body.id }, { $push: { travel: dbTravel } }, { new: true });
            })
            .then(function (dbUser) {
                res.json(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            });
    }
};