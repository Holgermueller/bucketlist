const router = require("express").Router();
const listRoutes = require("./listRoutes");

router.use("/bucketList", listRoutes);

module.exports = router;