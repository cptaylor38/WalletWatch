const router = require("express").Router();
const livingController = require("../../controllers/livingController");

router
    .route('/:id')
    .put(livingController.delete);

router
    .route('/create')
    .post(livingController.create);


module.exports = router;