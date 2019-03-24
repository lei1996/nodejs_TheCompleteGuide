const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add product!</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  // 这里会 显示undefined, 要引入 bodyParser 这个插件
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
