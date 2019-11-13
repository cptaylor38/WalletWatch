const router = require("express").Router();
const financesController = require("../../controllers/financesController");

router
    .route('/')
    .get(financesController.display);

router
    .route('/:id')
    .put(financesController.delete);

router
    .route('/create')
    .post(financesController.create);


module.exports = router;