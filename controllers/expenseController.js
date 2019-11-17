const db = require("../models");

module.exports = {

    display: function (req, res) {
        console.log('expense controller reached');
        db.User.findOne({ _id: req.params.id })
            .then(result => console.log(result));
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
            details: req.body.note,
            amount: req.body.amount,
            date: req.body.date,
            recurring: req.body.recurring
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