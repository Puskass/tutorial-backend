const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");
const p = path.join(__dirname, "..", "data", "products.json");

const getProductFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
module.exports = class Product {
  constructor(title, price) {
    (this.id = v4()), (this.title = title), (this.price = price);
  }
  save() {
    getProductFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.error(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }

  static findById(id, cb) {
    getProductFromFile((products) => {
      const product = products.find((product) => product.id === id);
      cb(product);
    });
  }
};
