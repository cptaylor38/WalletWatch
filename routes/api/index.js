const router = require("express").Router();
const salaryRoutes = require("./salaryRt");
const livingRoutes = require("./livingRt");
const travelRoutes = require("./travelRt");
const healthRoutes = require("./healthRt");
const leisureRoutes = require("./leisureRt");
const financesRoutes = require("./financesRt");
const homeRoutes = require("./homeRt");

router.use("/salary", salaryRoutes);
router.use("/living", livingRoutes);
router.use("/travel", travelRoutes);
router.use("/health", healthRoutes);
router.use("/leisure", leisureRoutes);
router.use("/finances", financesRoutes);
router.use("/home", homeRoutes);

module.exports = router;