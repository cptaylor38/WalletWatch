const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
    .route('/salary')
    .post(usersController.updateSalary);

module.exports = router;