const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const withAuth = require("../utils/auth");
// const axios = require('axios');

router.get("/", withAuth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });
    // const postData = await Post.findAll();
    // const posts = postData.map((post) => post.get({ plain: true }));
    const users = userData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
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
