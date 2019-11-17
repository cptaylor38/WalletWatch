const router = require("express").Router();
const expenseController = require("../../controllers/expenseController");

router
    .route('/:id/:category')
    .get(expenseController.display);

router
    .route('/:id')
    .put(expenseController.delete);

router
    .route('/create')
    .post(expenseController.create);


module.exports = router;