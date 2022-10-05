const { name } = require("ejs");

module.exports = (sequelize, dataTypes) => {
    const Productos = sequelize.define ("Productos",{

        id:{
            type: dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING,
            allowNull:false

        },
        description:{
            type: dataTypes.TEXT,
            allowNull:false
        },
        price:{
            type: dataTypes.FLOAT,
            allowNull:false
        },
        image:{
            type: dataTypes.STRING,
            allowNull:false
        },
        category_id:{
            type: dataTypes.INTEGER,
            allowNull:false,
        },
        is_active:{ 
            type: dataTypes.INTEGER,
            defaultValue:1
        }
        
    },
    {
        timeStamps:false,
        tableName:"productos",
        underscored:true
    });
    
    
    Productos.associate = (models) => {
        Productos.hasMany(models.categorias, {
            as : 'categorias', 
            foreignKey : 'Productos_id'
       
        })
    
    
    return productos;
    } 
}