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
      order: [["username", "ASC"]],
      include: [{ model: Post}],
    });
    const users = userData.map((project) => project.get({ plain: true }));

    //fetch postData
    const postData = await Post.findAll();
    // console.log(postData);
    const posts = postData.map((post) => post.get({ plain: true }));
    

    res.render("homepage", {
      users,
      posts,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/', withAuth, (req, res) => {
//   Post.findAll({
//     where: {
//       user_id: req.session.user_id
//     },
//     attributes: [
//       "id",
//       "user_id",
//       "vibetype",
//       "contentbody",
//     ],
//     include: [
//       {
//         model: User,
//         attributes: ["id", "user_id", "vibetype", "contentbody"],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//     ]
//   })
//     .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));
//       res.render('dashboard', { posts, loggedIn: true });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });


router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
