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

const getOneProduct = async (req, res) => {
    const productID = req.body;

    try {
        const fetchedProduct = await productModel.findOne({ _id: productID});
        res.json(fetchedProduct);
    } catch (e) {
        res.json(e.message);
    }
};

// const updateProduct = async (req, res) => {
//     const productInfo = req.body;

//     try {
//         let updatedInfo;

//         if (productInfo.purchasedQuantity) {
//             const {quantity} = await productModel.findById(productInfo.productID, "quantity");

//             if (quantity < productInfo.purchasedQuantity) {
//                 throw new Error("Not enough stock available");
//             }

//             updatedInfo = await productModel.findByIdAndUpdate(
//                 productInfo.productID, {$inc: {quantity: -productInfo.purchasedQuantity}}, {new: true}
//             );
//         } else {
//             productInfo.totalPrice = productInfo.price - (productInfo.price * productInfo.discount) / 100;

//             updatedInfo = await productModel.findByIdAndUpdate(
//                 productInfo.productID, productInfo, {new: true}
//             );
//         }
//         return res.json(updatedInfo);

//     } catch (e) {
//         res.json(e.message);
//     }
// };
// const updateProduct = async (req, res) => {
//     const { productID, purchasedQuantity, price, discount } = req.body;
  
//     try {
//       if (!productID) {
//         return res.status(400).json({ error: "Product ID is required" });
//       }
  
//       if (purchasedQuantity && purchasedQuantity <= 0) {
//         return res
//           .status(400)
//           .json({ error: "Purchased quantity should be greater than 0" });
//       }
  
//       const product = await productModel.findById(productID);
  
//       if (!product) {
//         return res.status(404).json({ error: "Product not found" });
//       }
  
//       if (purchasedQuantity && product.quantity < purchasedQuantity) {
//         return res
//           .status(400)
//           .json({ error: "Not enough stock available for this product" });
//       }
  
//       let updatedInfo;
  
//       if (purchasedQuantity) {
//         updatedInfo = await productModel.findByIdAndUpdate(
//           productID,
//           { $inc: { quantity: -purchasedQuantity } },
//           { new: true }
//         );
//       } else {
//         const totalPrice = price - (price * discount) / 100;
//         updatedInfo = await productModel.findByIdAndUpdate(
//           productID,
//           { ...req.body, totalPrice },
//           { new: true }
//         );
//       }
  
//       return res.json(updatedInfo);
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ error: "Internal server error" });
//     }
// };

const updateProduct = async (req, res) => {
    const productID = req.params.id;
    const { productName, description, image, price, quantity, discount} = req.body;

    try {
        const updateProduct = {productName, description, image, price, quantity, discount}

        const update = await productModel.findByIdAndUpdate(productID, updateProduct)
            .then(() => res.status(200).send({status: 'updated', message: update}));
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

const deleteProduct = async (req, res) => {
    const productID = req.params.id;

    try {
        // Check if product exists before deleting
        const product = await productModel.findById(productID);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        const deletedRecord = await productModel.findByIdAndDelete(productID);
        res.json(deletedRecord);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

module.exports = {postProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct};