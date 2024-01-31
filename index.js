const express = require("express");
const path = require("path");
const fs = require("fs");
const { v4 } = require('uuid')

const p = path.join(__dirname, "data", "products.json");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.redirect("/products"))
app.get("/products", (req, res) => {
  fs.readFile(p, (err, products) => {
    res.render("index", {
      pageTitle: "Web Shop",
      products: JSON.parse(products), 
    });
  });
});

app.get("/admin/add-product", (req, res) => {
  res.render("add-product", { pageTitle: "Web Shop - Add New Product" });
});

app.post("/admin/add-product", (req, res) => {
  const { title, price } = req.body;
  const product = {
    id: v4(),
    title,
    price
  }

  fs.readFile(p, (err, products) => {
    const updatedProducts = [product, ...JSON.parse(products)];
    fs.writeFile(p, JSON.stringify(updatedProducts), () => {
      res.redirect("/");
    });
  });
});

app.listen(5000);
