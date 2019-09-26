const db = require("../models");

module.exports = {
    updateSalary: function (req, res) {
        db.User.findOneAndUpdate({ _id: req.body.id }, { salary: req.body.salary })
            .then((updatedProfile) => res.send(updatedProfile))
            .catch(err => console.log(err));
    }
};