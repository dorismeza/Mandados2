const sequelize = require('sequelize');
const bcrypt = require('bcrypt');
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
            allowNull: false
        },
        contrasena:{
            type: sequelize.STRING(250),
            allowNull: false
        },
        nombre:{
            type: sequelize.STRING(45),
            allowNull: false
        },
        apellido:{
            type: sequelize.STRING(45),
            allowNull: false
        },
        telefono:{
            type: sequelize.STRING(45),
            allowNull: false
        },
        idtipo:{
            type: sequelize.INTEGER,
            allowNull: true, 
            defaultValue: 1
        },
        activo:{
            type: sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
        imagen:{
            type: sequelize.STRING(250),
            allowNull: true
        }
    },

    {
        tableName: "Usuarios",
        timestamps: false,
        hooks:{
            beforeCreate(Usuario){
                const hash = bcrypt.hashSync(Usuario.contrasena, 5);
                Usuario.contrasena = hash;
            },
            beforeUpdate(Usuario){
                const hash = bcrypt.hashSync(Usuario.contrasena, 5);
                Usuario.contrasena = hash;
            }
        }

    }
);

Usuario.prototype.VerificarContrasena = (con, com) =>{
    return bcrypt.compareSync(con, com);
}
module.exports = Usuario