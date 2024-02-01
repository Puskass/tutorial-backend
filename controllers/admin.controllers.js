const Product = require("../models/Product");

exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    pageTitle: "Web Shop - Add New Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res) => {
  const { title, price } = req.body;

  const product = new Product(title, price);
  product.save();
  res.redirect("/products");
};

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin-products", {
      pageTitle: "Admin Products",
      path: "/admin/products",
      products: products,
    });
  });
};

exports.getOrders = (req, res) => {
  res.render("orders", {
    pageTitle: "Orders",
    path: "/admin/orders",
  });
};
