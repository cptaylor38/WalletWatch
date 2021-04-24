const router = require('express').Router();
const subscriptionsController = require('../../controllers/subscriptionsController');

router.route('/:id/:category').get(subscriptionsController.display);

router.route('/delete/:id').put(subscriptionsController.delete);

router.route('/create').post(subscriptionsController.create);

router.route('/createmulti').post(subscriptionsController.create_multiple);

router.route('/update').post(subscriptionsController.update);

module.exports = router;
