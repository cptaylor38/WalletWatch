const db = require("../models");

module.exports = {
    updateSalary: function (req, res) {
        console.log('updateSalary of usersController' + req)
        db.User.findOneAndUpdate({ _id: req.body.id }, { salary: req.body.salary })
            .then((updatedProfile) => console.log(updatedProfile))
            .catch(err => console.log(err));
    }
};