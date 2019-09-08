const router = require("express").Router();
const usersController = require("../../controllers/usersController");


router
    .route('/create')
    .post(usersController.create);

module.exports = router;