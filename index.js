const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signup.html"));
});

app.post("/signup", (req, res) => {
  //
  const { username, password } = req.body
  const user = { 
    username,
    password
  }
  console.log(user);
  res.redirect("/")
});

app.listen(5000);
