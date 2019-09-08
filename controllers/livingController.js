const db = require("../models");

module.exports = {

    delete: function (req, res) {
        db.Living.deleteOne({ _id: req.params.id })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    },


    create: function (req, res) {
        const livingExpense = { title: req.body.title, body: req.body.body };
        db.Living
            .create(livingExpense)
            .then(function (dbLiving) {
                return db.User.findOneAndUpdate({ _id: req.body.id }, { $push: { living: dbLiving } }, { new: true });
            })
            .then(function (dbUser) {
                res.json(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            });
    }
};