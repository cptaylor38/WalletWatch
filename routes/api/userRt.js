const router = require("express").Router();
const usersController = require("../../controllers/usersController");


router
    .route('/create')
    .post(usersController.create);
router
    .route('/:id')
    .get(usersController.getProfile);

module.exports = router;