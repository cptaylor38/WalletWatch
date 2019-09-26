const router = require("express").Router();
const usersController = require("../../controllers/usersController");

console.log('salaryRt reached');

router
    .route('/update')
    .post(usersController.updateSalary);

module.exports = router;