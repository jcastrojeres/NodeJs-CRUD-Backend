const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getProduct);

//Create Product
router.post("/", createProduct);
//update product
router.put("/:id", updateProduct);
// delete product
router.delete("/:id", deleteProduct);

module.exports = router;
