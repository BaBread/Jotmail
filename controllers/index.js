const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const userRoutes = require("./api/userRoutes");
// const postRoutes = require("./postRoutes");

router.use("/", homeRoutes);
router.use("/api/users/", userRoutes);

module.exports = router;
