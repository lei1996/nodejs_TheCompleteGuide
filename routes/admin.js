const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title" /><button type="submit">Add product!</button></form>'
  );
});

router.post("/add-product", (req, res, next) => {
  // 这里会 显示undefined, 要引入 bodyParser 这个插件
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
