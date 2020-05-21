const Sequelize = require("sequelize");
const { sequelize } = require("./sequelize/connection/connect");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
