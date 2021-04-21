const router = require('express').Router();
const subscriptionsController = require('../../controllers/subscriptionsController');

router.route('/:id/:category').get(subscriptionsController.display);

router.route('/delete/:id').put(expenseController.delete);

router.route('/create').post(expenseController.create);

router.route('/update').post(expenseController.update);

module.exports = router;
