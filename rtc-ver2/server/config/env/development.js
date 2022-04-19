require("dotenv").config();

const devConfig = {
  port: process.env.PORT || 5050,
};

module.exports = devConfig;