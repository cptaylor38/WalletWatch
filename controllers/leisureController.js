const db = require("../models");

module.exports = {

    delete: function (req, res) {
        db.Leisure.deleteOne({ _id: req.params.id })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    },


    create: function (req, res) {
        const leisureExpense = { title: req.body.title, body: req.body.body };
        db.Leisure
            .create(leisureExpense)
            .then(function (dbLeisure) {
                return db.User.findOneAndUpdate({ _id: req.body.id }, { $push: { leisure: dbLeisure } }, { new: true });
            })
            .then(function (dbUser) {
                res.json(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            });
    }
};