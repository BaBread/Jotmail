const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = require("./userData.js");
const seedPosts = require("./postData.js")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  await User.bulkCreate(seedPosts, {
    individualHooks: true,
    returning: true,
  });
  
  await seedPosts();

  process.exit(0);
};

seedDatabase();
