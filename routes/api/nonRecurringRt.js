const router = require('express').Router();
const nonRecurringController = require('../../controllers/nonRecurringController');

router.route('/:id/:category').get(nonRecurringController.display);

router.route('/delete/:id').put(nonRecurringController.delete);

router.route('/create').post(nonRecurringController.create);

router.route('/createmulti').post(nonRecurringController.create_multiple);

router.route('/update').post(nonRecurringController.update);

module.exports = router;
