const productModel = require("../models/Product");

const postProduct = async (req, res) => {
    const {productName, description, image, price, quantity, discount, reviews} = req.body;

    try {
        const ProductModel = new productModel({productName, description, image, price, quantity, discount, reviews});

        const data = await ProductModel.save();
        res.json(data);
    } catch (e) {
        res.json(e.message);
    }
};

module.exports = {postProduct};