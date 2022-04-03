const Sequelize = require('sequelize');
const db = new Sequelize(
    'mandados',
    'root',
    'hola1901',
    {
        host:'localhost',
        dialect: 'mysql',
        port: '3306',
    },
);
module.exports = db;