const Sequelize = require("sequelize");
const {
  database,
  password,
  username,
} = require("../config/config.json").development;
exports.sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});
