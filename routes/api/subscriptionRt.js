const router = require('express').Router();
const subscriptionsController = require('../../controllers/subscriptionsController');

router.route('/:id/:category').get(subscriptionsController.display);

module.exports = router;
