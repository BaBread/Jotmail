const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const withAuth = require("../utils/auth");


router.get("/", withAuth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const userData = await Post.findAll({
      attributes: ["id", "vibetype", "contentbody", "user_id", "created_at"],
      order: [["created_at", "DESC"]],
      include: [{ model: User, attributes: ["username"] }],
    });

    const posts = userData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newPost", (req, res) => {
  const user_id = req.session.user_id;
  res.render("newPost", { user_id });
});

router.get("/viewPost", (req, res) => {
  res.render("viewPost", { vibetype });
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
