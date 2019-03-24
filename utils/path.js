const path = require("path");

// 获取当前脚本的路径
module.exports = path.dirname(process.mainModule.filename);
