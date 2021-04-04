const { User } = require('../models');

const userData = [
  {
    username: "Kaya",
    email: "kayak@gmail.com",
    password: "password1234"
  },
  {
    username: "Stephen",
    email: "stevie@yahoo.com",
    password: "password1234"
  },
  {
    username: "Chris",
    email: "chris@sbcglobal.net",
    password: "password1234"
  },
  {
    username: "John",
    email: "johnsmith@gmail.com",
    password: "password1234"
  },
  {
    username: "Mac",
    email: "michael@yahoo.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;