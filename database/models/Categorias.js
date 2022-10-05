const { name } = require("ejs");

module.exports = (sequelize, dataTypes) => {
    const Categorias = sequelize.define ("Categorias",{

        id:{
            type: dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        category:{
            type: dataTypes.STRING,
            allowNull:false

        }
    },
    {
        timeStamps:false,
        tableName:"categorias",
        underscored:true
    });
    
    
    
    
    
    return categorias;
    } 