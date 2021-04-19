const db = require('../models');

module.exports = {
  display: function (req, res) {
    let userId = req.params.id;
    let category = req.params.category;
    db.User.findOne({ _id: userId })
      .populate('nonRecurring')
      .then((data) => {
        let filteredData = data.nonRecurring.filter((item) => {
          if (item.category.toLowerCase() === category) return item;
        });
        res.json(filteredData);
      });
  },
};
