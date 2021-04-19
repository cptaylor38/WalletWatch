const router = require('express').Router();
const prescriptionsController = require('../../controllers/prescriptionsController');

router.route('/:id').get(prescriptionsController.display);

module.exports = router;
