const mongoose = require("mongoose");

const productSchema = new mongoose.Schema ({
    productName:{
        type: String,
        required:[true],
    },
    price:{
        type: Number,
        required:[true],
        unique: true,
    },
    quantity:{
        type: String,
        required:[true],
        unique: true,
    },
});

const productInfo = mongoose.model("ProductInfo", productSchema);

module.exports = productInfo;