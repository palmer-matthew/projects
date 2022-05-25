//MODULE IMPORT
const express = require("express");

//ROUTER INIT
const router = express.Router();

//ROUTER DEFINITIONS
router.route("/").all((req, res) => {
    res.status(404).json({
        message: "Route Unknown. Please Contact The Developer",
        status: 404
    });
});

//EXPORT ROUTER
module.exports = router;