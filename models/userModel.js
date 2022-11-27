const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema ({
    fullName:{
        type: String,
        required:[true, "Name is Required"],
    },
    email:{
        type: String,
        required:[true, "Email is Required"],
        unique: true,
    },
    password:{
        type: String,
        required:[true, "Password is Required"],
        unique: true,
    },
});

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
});

const userInfo = mongoose.model("UserInfo", userSchema);

module.exports = userInfo;