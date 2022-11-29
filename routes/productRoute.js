const express = require("express");
const router = express.Router();
const productInfo = require("../models/productModel");

router.route("/createProduct").post((req, res) => {
    const productName = req.body.productName;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const newProduct = new productInfo({
        productName,
        price,
        quantity
    });
    newProduct.save();
})

module.exports = router;