const router = require("express").Router();
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

// let postData;
// router
//   .route("/viewPost")
//   .post(async (req, res) => {
//     console.log("request body string:", req.body);

//     try {
//       // Define the specific vibetype you want to filter by (e.g., 'hater')
//       // const specificVibetype = req.body.vibetype;
//       const { vibetype } = req.body;
//       const postData = await Post.findAll({
//         attributes: ["id", "vibetype", "contentbody", "user_id", "created_at"],
//         where: {
//           vibetype: vibetype, // Filter by the specific vibetype
//         },
//         order: [["created_at", "DESC"]],
//         include: [{ model: User, attributes: ["username"] }],
//       });
//       console.log("test string", postData);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   })
//   .get(async (req, res) => {
//     const posts = postData.map((post) => post.get({ plain: true }));
//     res.render("viewPost", {
//       posts,
//     });
//   });
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
