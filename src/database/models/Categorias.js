/**
 * Import Sequelize.
 */
 const { Sequelize, DataTypes } = require("sequelize");

 /**
  * Import the Sequelize instance that you have exported
  * in the config/database.js file.
  */
 const sequelize = require("../connection");
 
 /**
  * Define a model that can be managed by Sequelize.
  */
 const categorias = sequelize.define(
     "categorias",
     {
         id: {
             type: DataTypes.INTEGER,
             autoIncrement: true,
             allowNull: false,
             primaryKey: true,
         },
        
        
         nombre: {
            type: DataTypes.STRING,
            allowNull: false,
         
        },
        
        
        },
        {
            timestamps: false
        }
            /**
          * Other model options go here
          */
     );
         
    
 
 /**
  * Export the model, so that it can be used in any
  * page to execute CRUD operations on the app_posts table.
  */
 module.exports = categorias;