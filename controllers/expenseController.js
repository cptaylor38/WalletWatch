const db = require("../models");

module.exports = {

    display: function (req, res) {
        let userId = req.params.id;
        let category = req.params.category;
        db.User.findOne({ _id: userId }, { "Expense": category })
            .populate('expense')
            .then(data => res.json(data));
    },

    delete: function (req, res) {
        db.Living.deleteOne({ _id: req.params.id })
            .then(result => console.log(result))
            .catch(err => console.log(err));
    },


    create: function (req, res) {
        const Expense =
        {
            category: req.body.category,
            monthly: req.body.monthly,
            date: req.body.date,
            amount: req.body.amount,
            title: req.body.title
        };

        db.Expense
            .create(Expense)
            .then(function (dbExpense) {
                return db.User.findOneAndUpdate({ _id: req.body.id }, { $push: { expense: dbExpense } }, { new: true });
            })
            .then(function (dbUser) {
                res.json(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            });
    }
};