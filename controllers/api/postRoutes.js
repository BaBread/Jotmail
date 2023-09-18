const router = require("express").Router();
const { Post } = require("../../models");
const axios = require("axios");

//Posts the new Vibepost as JSON
router.post('/api/posts', async (req, res) => {
  try {
    const { vibetype, contentbody } = req.body;
    const user_id = req.session.user_id;

    const newPost = await Post.create({
      vibetype,
      contentbody,
      user_id,
      id,
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



router.delete("/:post_id", async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        post_id: req.params.id,
      },
    });
    if (deletedPost) {
      res.json({ message: "Post deleted successfully" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// const options = {
//     url: 'http://localhost:3000/api/home',
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     data: {
//       name: 'David',
//       age: 45
//     }
//   };

//   axios(options)
//     .then(response => {
//       console.log(response.status);
//     });

module.exports = router;
