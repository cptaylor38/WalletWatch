const db = require('../models');

module.exports = {
  display: function (req, res) {
    let userId = req.params.id;
    db.User.findOne({ _id: userId })
      .populate('utilities')
      .then((data) => {
        res.json(data);
      });
  },
};
