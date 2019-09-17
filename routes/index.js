const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(function (req, res) {
    console.log(`
    Path ${req.path}
    Header ${req.header}
    Protocol ${req.protocol}
    Subdomains ${req.subdomains}
    Hostname ${req.hostname}
    Method ${req.method}
    OriginalUrl ${req.originalUrl}
    Params ${req.params}
    Query ${req.query}
    Body ${req.body}
    `);

    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});


module.exports = router;