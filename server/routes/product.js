const router = require("express").Router();
const {postProduct, getAllProducts, updateProduct, deleteProduct} = require("../controllers/productController");

router.post("/products", postProduct);
router.get("/", getAllProducts);
router.patch("/updateProduct", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;