const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // 不能直接 引用文件路径， 需要 引入 path
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
