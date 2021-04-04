  
const { Post } = require('../models');

const postData = [
  {
    title: 'The Firefox logo isn’t a fox.',
    post_text: 'There is a common misbelief that because the browser is named Firefox, the logo must be a fox. Surprisingly, the cute furry creature in the logo is actually a red panda!',
    user_id: 1,
  },
  {
    title: 'Google rents out goats.',
    post_text: 'You read that right, instead of mowing their lawn, Google rents goats to eat the grass at their Mountain View headquarters. A herder will bring 200 goats which are herded by a border collie named Jen.',
    user_id: 2,
  },
  {
    title: 'Samsung is 38 years and 1 month older than Apple.',
    post_text: 'Samsung was founded as a grocery store on March 1, 1938, by Lee Byung-Chull. Apple Founders Steve Jobs and Steve Wozniak created Apple Computer Inc. on April 1, 1976. ',
    user_id: 2,
  },
  {
    title: 'A Petabyte is a lot of data.',
    post_text: 'We all know 1 GB is the same as 1024 MB, but did you know that 1 petabyte (PB) is equivalent to 1024 terabytes (TB)? To give an example of how big this is, a 1 PB hard drive could hold 13.3 years of HD-TV video.',
    user_id: 3,
  },
  {
    title: 'Domain name registration used to be free.',
    post_text: 'Way back when people didn’t realize how huge the internet would be, registering a domain name was free until 1995. When a fee was introduced, it was high! Prices were typically $100 for two years of registration.',
    user_id: 4,
  },
  {
    title: 'Alexa is always listening to your conversations.',
    post_text: 'Alexa stores your dialogue history to its cloud to help improve your Alexa experience. But, you can review and delete these recordings, either in bulk, or individually.',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);


module.exports = seedPosts;