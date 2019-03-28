const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

router.post("/add-product", (req, res, next) => {
  // 这里会 显示undefined, 要引入 bodyParser 这个插件
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
