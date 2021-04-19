const router = require('express').Router();
const nonRecurringController = require('../../controllers/nonRecurringController');

router.route('/:id/:category').get(nonRecurringController.display);

module.exports = router;
