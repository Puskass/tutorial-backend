const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signup.html"));
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  const usersDataPath = path.join(__dirname, "data", "users.json");

  fs.readFile(usersDataPath, (err, usersAsJSON) => {
    const users = JSON.parse(usersAsJSON);

    const updatedUsers = [...users, { username, password }];
  });

  fs.writeFile(usersDataPath, JSON.stringify(updatedUsers), () => {
    res.redirect("/");
  });
});

app.listen(5000);
