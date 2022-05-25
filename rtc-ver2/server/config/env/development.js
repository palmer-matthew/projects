require("dotenv").config();

const devConfig = {
  port: process.env.PORT || 5050,
  dbUrl: process.env.DATABASE_URL,
};

module.exports = devConfig;