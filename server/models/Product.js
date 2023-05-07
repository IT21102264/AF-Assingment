const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    price: { type: Number, required: true },
    totalPrice: { type: Number, required: false },
    quantity: { type: Number, required: true },
    discount: { type: Number, required: true },
    reviews: { type: Array, default: [] },
});

module.exports = mongoose.model("Product", productSchema);