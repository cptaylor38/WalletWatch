const db = require("../models");

module.exports = {

    delete: function (req, res) {
        db.Health.deleteOne({ _id: req.params.id })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    },


    create: function (req, res) {
        const healthExpense = { title: req.body.title, body: req.body.body };
        db.Health
            .create(healthExpense)
            .then(function (dbHealth) {
                return db.User.findOneAndUpdate({ _id: req.body.id }, { $push: { health: dbHealth } }, { new: true });
            })
            .then(function (dbUser) {
                res.json(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            });
    }
};
