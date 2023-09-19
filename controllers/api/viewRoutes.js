const router = require("express").Router();
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

console.log("got to route");
router.get("/viewPost/:vibe", withAuth, (req, res) => {
  console.log("request Params", req.params.vibe);
  Post.findAll({
    where: {
      vibetype: req.params.vibe,
    },
    attributes: ["contentbody", "vibetype", "created_at"],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("viewPost", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
