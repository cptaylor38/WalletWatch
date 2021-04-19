const db = require('../models');

module.exports = {
  display: function (req, res) {
    let userId = req.params.id;
    let category = req.params.category;
    db.User.findOne({ _id: userId })
      .populate('subscriptions')
      .then((data) => {
        let filteredData = data.subscriptions.filter((item) => {
          if (item.category.toLowerCase() === category) return item;
        });
        res.json(filteredData);
      });
  },
};
