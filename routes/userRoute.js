const express = require("express");
const router = express.Router();
const userInfo = require("../models/userModel");

router.route("/create").post((req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password;
    const newUsers = new userInfo({
        fullName,
        email,
        password
    });
    newUsers.save();
})

module.exports = router;