const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.User.create(req.body, (err, res) => { if (err) throw err; console.log(res) });
    }
};