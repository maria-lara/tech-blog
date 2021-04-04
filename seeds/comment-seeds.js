const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "I had no idea that's crazy big!",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Interesting, I bet you tricked us on purpose. LOL",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Wow, I wish I knew that. I could have had an entire business selling my free domains today.",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "I claimed 20 and have made $5,00 from since then.",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "So creepy :(",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "This is why I refuse to buy one!",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);


module.exports = seedComments;