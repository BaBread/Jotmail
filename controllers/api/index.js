const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const viewRoutes = require("./viewRoutes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/view", viewRoutes);

module.exports = router;
