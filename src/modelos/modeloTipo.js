const Sequelize = require('sequelize');
const db = require('../configuraciones/db');
const Tipo = db.define(
    "tipo",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                is:{
                    args: [/^[0-9]+$/],
                    msg: "ID del tipo invalido."
                }
            },
        },
        nombre:{
            type: Sequelize.STRING(45),
            allowNull: false,
        },
       activo: {
            type: Sequelize.BOOLEAN,
            allowNull:true,
            defaultValue: true,
        },
        imagen: {
            type: Sequelize.STRING(250),
            allowNull:true,
            defaultValue: 'ImagenTipo.png',
        },
    },
    {
        tableName: "tipos",
        timestamps: false,
    },
);
module.exports=Tipo;