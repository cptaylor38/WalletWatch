const router = require("express").Router();
const expenseController = require("../../controllers/expenseController");

router
    .route('/:id/:category')
    .get(expenseController.display);

router
    .route('/delete/:id')
    .put(expenseController.delete);

router
    .route('/create')
    .post(expenseController.create);

router
    .route('/update')
    .post(expenseController.update);



module.exports = router;