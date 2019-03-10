const router = require("express").Router();
const buckeListRoutes = require("./blRoutes");

router.use("/blRoutes", buckeListRoutes);

module.exports = router;
