const db = require('../models');

module.exports = {
  create: function (req, res) {
    const Utility = {
      title: req.body.title,
      company_name: req.body.company_name,
      amount: req.body.amount,
      due_date: req.body.due_date,
      url: req.body.url,
    };

    db.Utility.create(Utility)
      .then(function (dbUtility) {
        return db.User.findOneAndUpdate(
          { _id: req.body.id },
          { $push: { utilities: dbUtility } },
          { new: true }
        );
      })
      .then(function (dbUser) {
        res.json(dbUser);
      })
      .catch(function (err) {
        res.json(err);
      });
  },

  update: function (req, res) {
    db.Utility.findOneAndUpdate(
      { _id: req.body.id },
      {
        servicer: req.body.category,
        due_date: req.body.monthly,
        title: req.body.date,
        total: req.body.amount,
        notes: req.body.title,
        monthly_payment: req.body.monthly_payment,
        url: req.body.url,
        interest_rate: req.body.interest_rate,
      },
      { new: true }
    ).then((result) => res.json(result));
  },

  delete: function (req, res) {
    db.Utility.findByIdAndDelete({ _id: req.params.id })
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  },

  display: function (req, res) {
    let userId = req.params.id;
    db.User.findOne({ _id: userId })
      .populate('utilities')
      .then((data) => {
        res.json(data);
      });
  },
};
