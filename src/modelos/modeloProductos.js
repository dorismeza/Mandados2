const sequelize= require('sequelize');
const db= require('../configuracion/db');
const Producto=db.define(
    "productos",
    {
        //atributos de la tabla
        idproductos:{
            type: sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        nombreProducto:{
            type: sequelize.STRING(45),
            allowNull:false,
        },
        precioProducto:{
            type: sequelize.STRING(45),
            allowNull:false,
        },
        cantidad:{
            type: sequelize.INTEGER,
            allowNull:false,
        },
        estado:{
            type: sequelize.ENUM('AGOTADO', 'DISPONIBLE'),
            allowNull: false,
            defaultValue: 'DISPONIBLE',
        },
        imagen:{
            type: sequelize.STRING(250),
            allowNull:false,
        },
        idtienda:{
            type: sequelize.INTEGER,
            allowNull:false,
        }
 
    },
    // agregar el nombre de la tabla
    {
        tableName:"productos",
        timestamps:false,
    }  
);

module.exports= Producto;