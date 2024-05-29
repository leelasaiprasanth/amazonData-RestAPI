const express = require('express')
const router = express.Router();
const Product = require("../models/product.model");
const { createProducts, getProducts, getProductsByID, updateProducts, deleteProducts } = require("../controllers/product.controller");



router.get("/", getProducts);

router.get("/:id", getProductsByID);

router.post("/", createProducts);

router.put("/", updateProducts);

router.delete("/", deleteProducts);


module.exports = router;
