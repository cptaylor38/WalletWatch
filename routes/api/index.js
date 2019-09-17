const router = require("express").Router();
const userRoutes = require("./userRt");
const livingRoutes = require("./livingRt");
const travelRoutes = require("./travelRt");
const healthRoutes = require("./healthRt");
const leisureRoutes = require("./leisureRt");
const financesRoutes = require("./financesRt");

console.log('index.js of server api routes');

router.use("/user", userRoutes);
router.use("/living", livingRoutes);
router.use("/travel", travelRoutes);
router.use("/health", healthRoutes);
router.use("/leisure", leisureRoutes);
router.use("/finances", financesRoutes);

module.exports = router;