const router = require("express").Router();
const { Post } = require("../models");
const axios = require("axios");

//Posts the new Vibepost as JSON
const form = document.querySelector("form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const vibetype = document.querySelector("#vibetype").value; //Needs passed through tag to equal HTML tag
  const contentbody = document.querySelector("#contentbody").value; // Needs passed through tag to equal HTML tag
  const userID = req.session.user_id; //Check to make sure this is being captured

  const postData = {
    user_id: userID, //Needs to pull in the User ID from the session/cookie
    vibetype: vibetype,
    contentbody: contentbody,
  };

  try {
    const response = await axios.post("/api/posts", postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      console.log("Post successful");
    } else {
      console.error("Post failed");
    }
  } catch (error) {
    console.error(error);
  }
});

Post.create(req.body)
  .then((postData) => {
    reponse.status(200).json(postData);
  })
  .catch((err) => {
    console.log(err);
    response.status(400).json(err);
  });

router.put("/:post_id", async (req, res) => {
  try {
    const postId = req.params.post_id;
    const postData = {
      vibetype: req.body.vibetype,
      contentbody: req.body.contentbody,
    };

    // Make the axios PUT request
    const response = await axios.put(`/api/posts/${postId}`, postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Handle the response or send a JSON response here
    if (response.status === 200) {
      // Success, handle accordingly
      // You can render a template or send a JSON response here
      res.json(response.data); // Send back the updated data if needed
    } else {
      // Handle other response status codes
      res.status(response.status).json(response.data);
    }
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json(error);
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
