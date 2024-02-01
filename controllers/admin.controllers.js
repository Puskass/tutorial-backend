const path = require("path");
const fs = require("fs");
const { v4 } = require('uuid')
const p = path.join(__dirname, "..", "data", "products.json");

exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    pageTitle: "Web Shop - Add New Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res) => {
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
};

exports.getProducts = (req, res) => {
    fs.readFile(p, (err, products) => {
        res.render("admin-products", {
            pageTitle: "Admin Products",
            path: "/admin/products",
            products: JSON.parse(products)
        })
    })
}

exports.getOrders = (req, res) => {
    res.render("orders", {
      pageTitle: "Orders",
      path: "/admin/orders",
    });
  };