const sequelize = require('sequelize');
//const bcrypt = require('bcrypt');
const db = require('../configuracion/db');
const Usuario = db.define(

    "Usuarios",{
        id:{
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        correo:{
            type: sequelize.STRING(250),
            allowNull: false,
        },
        contrasena:{
            type: sequelize.STRING(250),
            allowNull: false,
        },
        nombre:{
            type: sequelize.STRING(45),
            allowNull: false,
        },
        apellido:{
            type: sequelize.STRING(45),
            allowNull: false,
        },
        telefono:{
            type: sequelize.STRING(45),
            allowNull: false,
        }
    },

    {
        tableName: "Usuarios",
        timestamps: false,

    }
);

module.exports = Usuario