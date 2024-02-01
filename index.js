const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

const productsRoutes = require("./routes/products.routes");
const adminRoutes = require("./routes/admin.routes");
const errorControllers = require("./controllers/error.controllers")

app.use(productsRoutes);
app.use(adminRoutes);

app.get("*", errorControllers.get404);

app.listen(5000);
