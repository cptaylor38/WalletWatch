const router = require("express").Router();
const salaryRoutes = require("./salaryRt");
const expenseRoutes = require("./expenseRt");
const homeRoutes = require("./homeRt");

router.use("/salary", salaryRoutes);
router.use("/expense", expenseRoutes);
router.use("/home", homeRoutes);

module.exports = router;