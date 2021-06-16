const { resolve } = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    },
    migrations: {
      directory: resolve("src", "database", "migrations"),
    },
  },
};
