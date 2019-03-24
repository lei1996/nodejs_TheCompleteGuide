const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  // 这里会 显示undefined, 要引入 bodyParser 这个插件
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
