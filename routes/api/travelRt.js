const router = require("express").Router();
const travelController = require("../../controllers/travelController");

router
    .route('/:id')
    .put(travelController.delete);

router
    .route('/create')
    .post(travelController.create);


module.exports = router;