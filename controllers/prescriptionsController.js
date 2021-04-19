const db = require('../models');

module.exports = {
  display: function (req, res) {
    let userId = req.params.id;
    db.User.findOne({ _id: userId })
      .populate('prescriptions')
      .then((data) => {
        res.json(data);
      });
  },
};
