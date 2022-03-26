const sequelize = require('sequelize');
const db = require('../configuracion/db');
const Tienda =db.define(
    "tienda",
    {
        idTienda:{
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombreTienda:{
            type: sequelize.STRING(45),
            allowNull: false,
        },
        telefono:{
            type: sequelize.STRING(8),
            allowNull: false,
        },
        direccion:{
            type: sequelize.STRING(250),
            allowNull: false,
        },
        idCategoria:{
            type: sequelize.INTEGER,
            allowNull: false,
        },
        activo:{
            type: sequelize.BOOLEAN,
            allowNull: false,
        },
        imagen:{
            type: sequelize.STRING(250),
            allowNull: false,
        }
    },
    {
        tableName: "tienda",
        timestamps: false,
    }
);
module.exports= Tienda;