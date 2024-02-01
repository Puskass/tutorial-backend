const express = require("express");

const router = express.Router();

const { getAddProduct, postAddProduct, getProducts, getOrders } = require("../controllers/admin.controllers")

router.get("/admin/add-product", getAddProduct);

router.post("/admin/add-product", postAddProduct);

router.get("/admin/products", getProducts)

router.get("/admin/orders", getOrders)

module.exports = router;
