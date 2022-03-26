const sequelize = require('sequelize');
const db = require('../configuracion/db');
const DetallePedido =db.define(
    "detallepedido",
    {
        idDetalle:{
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        idpedido:{
            type: sequelize.INTEGER,
            allowNull: false,
        },
        idproducto:{
            type: sequelize.INTEGER,
            allowNull: false,
        },
        cantidad:{
            type: sequelize.INTEGER,
            allowNull: true,
            defaultValue: 1,
        },
    },
    {
        tableName: "detallepedido",
        timestamps: false,
    }
);
module.exports = DetallePedido;