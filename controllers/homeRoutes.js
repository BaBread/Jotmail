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

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

