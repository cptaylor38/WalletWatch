const router = require("express").Router();
const db = require('../../models');

router.route('/:id').get((req, res) => {
    db.User.findOne({ _id: req.params.id })
        .populate('finances')
        .populate('health')
        .populate('leisure')
        .populate('living')
        .populate('travel')
        .exec((err, profile) => {
            if (err) throw err;
            console.log(profile);
            res.json(profile);
        })
})

module.exports = router;