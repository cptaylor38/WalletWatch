const db = require('../models');

module.exports = {
  display: function (req, res) {
    let userId = req.params.id;
    db.User.findOne({ _id: userId })
      .populate('loan')
      .then((data) => {
        res.json(data);
      });
  },

  delete: function (req, res) {
    db.Loan.findByIdAndDelete({ _id: req.params.id })
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  },

  update: function (req, res) {
    db.Loan.findOneAndUpdate(
      { _id: req.body.id },
      {
        servicer: req.body.servicer,
        due_date: req.body.due_date,
        title: req.body.title,
        total: req.body.total,
        notes: req.body.notes,
        monthly_payment: req.body.monthly_payment,
        url: req.body.url,
        interest_rate: req.body.interest_rate,
      },
      { new: true }
    ).then((result) => res.json(result));
  },

  create: function (req, res) {
    const Loan = {
      servicer: req.body.servicer,
      due_date: req.body.due_date,
      title: req.body.title,
      total: req.body.total,
      notes: req.body.notes,
      monthly_payment: req.body.monthly_payment,
      url: req.body.url,
      interest_rate: req.body.interest_rate,
    };

    db.Loan.create(Loan)
      .then(function (dbLoan) {
        return db.User.findOneAndUpdate(
          { _id: req.body.id },
          { $push: { loans: dbLoan } },
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
};
