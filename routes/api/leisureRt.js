const router = require("express").Router();
const leisureController = require("../../controllers/leisureController");

router
    .route('/:id')
    .put(leisureController.delete);

router
    .route('/create')
    .post(leisureController.create);


module.exports = router;