const db = require('../models');

function LoanConstructor(servicer, due_date, title, total, notes, monthly_payment, url, interest_rate){
  this.servicer = servicer;
  this.due_date = due_date;
  this.title = title;
  this.total = total;
  this.notes = notes;
  this.monthly_payment = monthly_payment;
  this.url = url;
  this.interest_rate = interest_rate;
}

const loan_init = (body) => {
  return new LoanConstructor(body.servicer, body.due_date, body.title, body.notes, body.monthly_payment, body.url, body.interest_rate);
}

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
    let Loan = loan_init(req.body);
    db.Loan.findOneAndUpdate(
      { _id: req.body.id },
      Loan,
      { new: true }
    ).then((result) => res.json(result));
  },

  create: function (req, res) {
    let Loan = loan_init(req.body);

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

  create_multiple: function(req, res){
    let user;
    try {
      req.loans_array.forEach(loan => {
        await db.Loan.create(loan_init(loan))
        user = await db.User.findOneAndUpdate(
          { _id: req.body.id },
          { $push: { loans: dbLoan } },
          { new: true }
        )
      })
      res.json(user);
    }
    catch (err){
      console.log(err);
      res.json(err);
    }
  }
};
