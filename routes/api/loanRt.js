const router = require('express').Router();
const loansController = require('../../controllers/loansController');

router.route('/:id').get(loansController.display);

router.route('/delete/:id').put(loansController.delete);

router.route('/create').post(loansController.create);

router.route('/createmulti').post(loansController.create_multiple);

router.route('/update').post(loansController.update);

module.exports = router;
