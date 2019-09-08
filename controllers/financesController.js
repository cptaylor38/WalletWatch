const db = require("../models");

module.exports = {

    delete: function (req, res) {
        db.Finances.deleteOne({ _id: req.params.id })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    },


    create: function (req, res) {
        const financesExpense = { title: req.body.title, body: req.body.body };
        db.Finances
            .create(financesExpense)
            .then(function (dbFinances) {
                return db.User.findOneAndUpdate({ _id: req.body.id }, { $push: { finances: dbFinances } }, { new: true });
            })
            .then(function (dbUser) {
                res.json(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            });
    }
};