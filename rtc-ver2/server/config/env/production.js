require("dotenv").config();

const prodConfig = {
  port: process.env.PORT || 5050,
};

module.exports = prodConfig;