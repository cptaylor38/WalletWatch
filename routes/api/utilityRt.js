const router = require('express').Router();
const utilitiesController = require('../../controllers/utilitiesController');

router.route('/:id').get(utilitiesController.display);

module.exports = router;
