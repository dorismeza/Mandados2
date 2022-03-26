const sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../configuracion/db');
const Pedidos = db.define(

    "pedido",{
        idPedido:{
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        idUsuario:{
            type: sequelize.INTEGER,
            allowNull: false
        },

        direccion:{
            type: sequelize.STRING,
            allowNull: false
        },
        estado: {
            type: sequelize.ENUM('AC', 'EN', 'C'),
            allowNull: true,
            defaultValue: 'AC'
        },

        formapago:{
            type: sequelize.ENUM('EFECTIVO', 'TARJETA'),
            allowNull: true,
            
        },

        codtarjeta:{
            type: sequelize.STRING,
            allowNull: true
        },
        fechatarjeta:{
            type: sequelize.DATE,
            allowNull: true,
        },

        hora:{
            type: sequelize.DATE,
            allowNull: true,
        },

        numtarjeta: {
            type: sequelize.STRING,
            allowNull: true,
        },
        total: {
            type: sequelize.DECIMAL,
            allowNull: true,
        }
    },

    {
        tableName: "pedido",
        timestamps: false,
    }

);

module.exports = Pedidos;