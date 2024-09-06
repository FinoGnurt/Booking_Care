const { Sequelize } = require("sequelize");

import chalk from "chalk";

const sequelize = new Sequelize("trungfino", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      chalk.red.bgWhite.bold("Connection has been established successfully.")
    );

    console.log(
      "==================================================================="
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
