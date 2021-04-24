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
    db.User.findOne({ _id: req.params.id })
      .populate('utilities')
      .then((data) => {
        res.json(data);
      });
  },

  create_multiple: async function (req, res) {
    try {
      let new_utilities = await db.Utility.insertMany(utilities_array);
      let updated_profile = await db.User.findOneAndUpdate(
        { _id: req.body.id },
        { $push: { utilities: new_utilities } },
        { new: true }
      );
      res.json(updated_profile);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
};
