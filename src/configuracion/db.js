const Sequelize = require('sequelize');
const db = new Sequelize(
    'mandados',
    'doris',
    '123456',
    {
        host:'localhost',
        dialect: 'mysql',
        port: '3306',
    },
);
module.exports = db;