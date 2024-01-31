const express = require('express')
const path = require("path");
const fs = require("fs");
const { v4 } = require("uuid");

const p = path.join(__dirname, "..", "data", "products.json");
const router = express.Router()

router.get("/admin/add-product", (req, res) => {
  res.render("add-product", { pageTitle: "Web Shop - Add New Product" });
});

router.post("/admin/add-product", (req, res) => {
  const { title, price } = req.body;
  const product = {
    id: v4(),
    title,
    price,
  };

  fs.readFile(p, (err, products) => {
    const updatedProducts = [product, ...JSON.parse(products)];
    fs.writeFile(p, JSON.stringify(updatedProducts), () => {
      res.redirect("/");
    });
  });
});
module.exports = router