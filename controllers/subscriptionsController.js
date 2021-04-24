const db = require('../models');

module.exports = {
  create: function (req, res) {
    const Subscription = {
      title: req.body.title,
      name: req.body.name,
      amount: req.body.amount,
      renewal_date: req.body.renewal_date,
      url: req.body.url,
      category: req.body.category,
      description: req.body.description,
    };

    db.Subscription.create(Subscription)
      .then(function (dbSubscription) {
        return db.User.findOneAndUpdate(
          { _id: req.body.id },
          { $push: { subscriptions: dbSubscription } },
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
    db.Subscription.findOneAndUpdate(
      { _id: req.body.id },
      {
        title: req.body.title,
        name: req.body.name,
        amount: req.body.amount,
        renewal_date: req.body.renewal_date,
        url: req.body.url,
        category: req.body.category,
        description: req.body.description,
      },
      { new: true }
    ).then((result) => res.json(result));
  },

  delete: function (req, res) {
    db.Subscription.findByIdAndDelete({ _id: req.params.id })
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  },

  display: function (req, res) {
    let category = req.params.category;
    db.User.findOne({ _id: req.params.id })
      .populate('subscriptions')
      .then((data) => {
        let filteredData = data.subscriptions.filter((item) => {
          if (item.category.toLowerCase() === category) return item;
        });
        res.json(filteredData);
      });
  },

  create_multiple: async function (req, res) {
    try {
      let new_subscriptions = await db.Loan.insertMany(subscriptions_array);
      let updated_profile = await db.User.findOneAndUpdate(
        { _id: req.body.id },
        { $push: { subscriptions: new_subscriptions } },
        { new: true }
      );
      res.json(updated_profile);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
};
