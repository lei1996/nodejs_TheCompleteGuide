const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'qqqq1111', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;