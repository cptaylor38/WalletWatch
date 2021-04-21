const router = require('express').Router();
const prescriptionsController = require('../../controllers/prescriptionsController');

router.route('/:id').get(prescriptionsController.display);

router.route('/delete/:id').put(prescriptionsController.delete);

router.route('/create').post(prescriptionsController.create);

router.route('/update').post(prescriptionsController.update);

module.exports = router;
