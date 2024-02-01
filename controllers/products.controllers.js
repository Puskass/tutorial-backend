const path = require("path");
const fs = require("fs");
const p = path.join(__dirname, "..", "data", "products.json");

const Product = require("../models/Product");

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("index", {
      pageTitle: "Web Shop",
      path: "/products",
      products: products,
    });
  });
};

exports.getProduct = (req, res) => {
  const { id } = req.params;
  Product.findById(id, (product) => {
    const error = { message: "Not Found" };
    if (!product) return res.render("error", { pageTitle: error.title, error });

    res.render("product-detail", {
      pageTitle: product.title,
      path: "/products",
      product,
    });
  });
};
