const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
    .route('/update')
    .post(usersController.updateSalary);

module.exports = router;