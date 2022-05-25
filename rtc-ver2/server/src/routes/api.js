//MODULE IMPORT
const express = require("express");
const { createHash , compareHash } = require("../utils/hash.js");

//MODEL IMPORTS
const User = require("../models/User.js");

//ROUTER INIT
const router = express.Router();

//ROUTE DEFINITIONS
router.route("/login").post(async (req, res) => {
    const { username, password } = req.body;

    if (!(username && password)) {

        res.status(400).json({
            message: "Invalid Parameters",
            status: 400
        });
        return;
    }

    try{
        const user = await User.findOne({ username: username });

        if(compareHash(password, user.password)){
            res.status(200).json({
                message: "Login Successful",
                loggedIn: true,
                status: 200
            })
            return;
        }else{
            res.status(401).json({
                message: "Login Unsuccessful",
                loggedIn: false,
                status: 401
            })
            return;
        }
    
    }catch(e){

        res.status(500).json({
            message: "Server Error Occurred. Please try again later.",
            status: 500
        });
        return;
    }

});

router.route("/signup").post(async (req, res) => {

    const { username, password } = req.body;

    if (!(username && password)) {

        res.status(400).json({
            message: "Invalid Parameters",
            status: 400
        });
        return;
    }

    try{
        const exist = User.countDocuments({ username: username });

        if(exist){
            res.status(406).json({
                status: 406,
                message: "Username exists already"
            });
            return;
        }
        const hash = await createHash(password);

        const user = new User({ username: username, password: hash });

        const newUser = await user.save();

        res.status(201).json({
            message: "User Created Successfully",
            loggedIn: true,
            status: 201
        });
        return;
    
    }catch(e){
        res.status(500).json({
            message: "Server Error Occurred. Please try again later.",
            status: 500
        });
        return;
    }
    
});

//EXPORT ROUTER
module.exports = router;