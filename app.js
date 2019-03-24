const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware!");
  next(); // 允许以后面的 中间件 执行
});

app.use("/ss", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
