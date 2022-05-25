require("dotenv").config();

const prodConfig = {
  port: process.env.PORT || 5050,
  dbUrl: process.env.DATABASE_URL,
};

module.exports = prodConfig;