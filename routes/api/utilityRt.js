const router = require('express').Router();
const utilitiesController = require('../../controllers/utilitiesController');

router.route('/:id').get(utilitiesController.display);

router.route('/delete/:id').put(utilitiesController.delete);

router.route('/create').post(utilitiesController.create);

router.route('/update').post(utilitiesController.update);

module.exports = router;
