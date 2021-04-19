const router = require('express').Router();
const loansController = require('../../controllers/loansController');

router.route('/:id').get(loansController.display);

module.exports = router;
