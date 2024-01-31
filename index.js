const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

const productsRoutes = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");

app.use(productsRoutes);
app.use(adminRoutes);

app.listen(5000);
