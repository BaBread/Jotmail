const { Post } = require('../models');

const postData = [
    {
      // "id": "1",
      "user_id": "9",
      "vibetype": "hater",
      "contentbody": "Ja Rule is out here still trying to stay relevant LOL",
    },
    {
        // "id": "2",
        "user_id": "7",
        "vibetype": "hater",
        "contentbody": "Michael Scott is a terrible manager and should be fired.  -Jim Halpert",
      },
      {
        // "id": "3",
        "user_id": "8",
        "vibetype": "love",
        "contentbody": "Gwen is an absolute diamond! Don't give up on love!",
      },
      {
        // "id": "4",
        "user_id": "8",
        "vibetype": "hater",
        "contentbody": "Gavin Rossdale and Bush sucks!",
      },
      {
        // "id": "5",
        "user_id": "10",
        "vibetype": "help",
        "contentbody": "How do I delete someone elses post?",
      },
      {
        // "id": "6",
        "user_id": "11",
        "vibetype": "help",
        "contentbody": "Why do we keep reviving old shows instead of creating something new?",
      },
      {
        // "id": "7",
        "user_id": "6",
        "vibetype": "newsflash",
        "contentbody": "There are now 11 Mondays until Christmas.  That is all.",
      },
      {
        // "id": "8",
        "user_id": "1",
        "vibetype": "controversy",
        "contentbody": "It's all fun and games until AI goes too far.  Terminator? I am Robot?  Now they're making The Creator...",
      },
      {
        // "id": "9",
        "user_id": "2",
        "vibetype": "quote",
        "contentbody": "In an insane world, it is the sane who are called crazy",
      },
      {
        // "id": "10",
        "user_id": "4",
        "vibetype": "controversy",
        "contentbody": "Is it just me, or are ereaders just not as fulfilling as flipping the pages of text in an actual book?",
      },
      {
        // "id": "11",
        "user_id": "6",
        "vibetype": "quote",
        "contentbody": "Attention campers.  Lunch has been cancelled due to lack of hustle.  Deal with it.  -Tony Perkis",
      },
      {
        // "id": "12",
        "user_id": "12",
        "vibetype": "love",
        "contentbody": "I cut your name into my arm so I can always remember you.  Meg's not right, but she's not wrong.",
      },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;