const router = require('express').Router();
const Post = require('../models/Post');
// const axios = require('axios');


router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const postData = await Post.findAll();
    const posts = postData.map((post) => post.get({ plain: true}));
    
    res.render('homepage', { posts });
  
} catch (err) {
    res.status(500).json(err);
}
});

router.get('/blogPost', async (req, res) => {
  try {
    res.render('blogPost', { user: { user }});
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;

