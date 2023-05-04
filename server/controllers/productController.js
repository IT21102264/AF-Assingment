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

const getAllProducts = async (req, res) => {
    try {
        const data = await productModel.find();
        res.json(data);
    } catch (e) {
        res.json(e.message);
    }
};

const updateProduct = async (req, res) => {
    const productInfo = req.body;

    try {
        let updatedInfo;

        if (productInfo.purchasedQuantity) {
            const {quantity} = await productModel.findById(productInfo.productID, "quantity");

            if (quantity < productInfo.purchasedQuantity) {
                throw new Error("Not enough stock available");
            }

            updatedInfo = await productModel.findByIdAndUpdate(
                productInfo.productID, {$inc: {quantity: -productInfo.purchasedQuantity}}, {new: true}
            );
        } else {
            productInfo.totalPrice = productInfo.price - (productInfo.price * productInfo.discount) / 100;

            updatedInfo = await productModel.findByIdAndUpdate(
                productInfo.productID, productInfo, {new: true}
            );
        }
        return res.json(updatedInfo);

    } catch (e) {
        res.json(e.message);
    }
};

const deleteProduct = async (req, res) => {
    const productID = req.params.productID;

    try {
        const deletedRecord = await productModel.findByIdAndDelete(productID);
        res.json(deletedRecord);
    } catch (e) {
        res.json(e.message);
    }
};

module.exports = {postProduct, getAllProducts, updateProduct, deleteProduct};