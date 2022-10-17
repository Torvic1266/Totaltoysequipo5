/**
 * Import Sequelize.
 */
 const { Sequelize, DataTypes } = require("sequelize");

 /**
  * Import the Sequelize instance that you have exported
  * in the config/database.js file.
  */
 const sequelize = require("../database/connection");
 
 /**
  * Define a model that can be managed by Sequelize.
  */
 const Usuario = sequelize.define(
     "app_usuarios",
     {
         id: {
             type: DataTypes.INTEGER,
             autoIncrement: true,
             allowNull: false,
             primaryKey: true,
         },
         email: {
             type: DataTypes.STRING,
             allowNull: false,
         },
        
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
         nombre: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         descripcion: {
             type: DataTypes.STRING,
             allowNull: false,
         },
         edad: {
             type: DataTypes.STRING,
             allowNull: true,
         },
         nacionalidad: {
             type: DataTypes.STRING,
             allowNull: true,
         },
         telefono: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         rol: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         /**
          * Other model options go here
          */
     },
     {
     timestamps: false,
     }
 );
 
 /**
  * Export the model, so that it can be used in any
  * page to execute CRUD operations on the app_posts table.
  */
 module.exports = Usuario;