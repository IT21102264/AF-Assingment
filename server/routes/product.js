const router = require("express").Router();
const {postProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct} = require("../controllers/productController");

router.post("/addProducts", postProduct);
router.get("/", getAllProducts);
router.get("/findOne", getOneProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;