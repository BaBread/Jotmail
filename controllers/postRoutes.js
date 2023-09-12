const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post } = require('../../models');
const axios = require('axios');

//Posts the new Vibepost as JSON
const form = document.querySelector('form');
form.addEventListener('submit', async event => {
    event.preventDefault();

    const vibetype = document.querySelector('#vibetype').value; //Needs passed through tag to equal HTML tag
    const contentbody = document.querySelector('#contentbody').value; // Needs passed through tag to equal HTML tag
    const userID = req.session.user_id;

const postData = {
    user_id: userID, //Needs to pull in the User ID from the session/cookie
    vibetype: vibetype,
    contentbody: contentbody,
    };
});


await axios.post(PostData),
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
.then(function (response) {
    response.status(200).json(response);
    console.log(response);
  })
  .catch(function (error) {
    response.status(500).json(error);
    console.log(error);
  });

  module.exports = router;




