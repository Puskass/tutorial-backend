const express = require("express");

const router = express.Router();

const { getProducts, getProduct } = require('../controllers/products.controllers') 

router.get("/", (req, res) => res.redirect("/products"));

router.get("/products", getProducts);

router.get("/products/:id", getProduct);

module.exports = router;
