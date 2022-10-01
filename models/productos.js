const { name } = require("ejs");

module.exports = (sequelize, dataTypes) => {
    const Productos = sequelize.define ("productos",{

        id:{
            type: dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        description:{
            type: dataTypes.STRING
        },
        price:{
            type: dataTypes.FLOAT
        },
        image:{
            type: dataTypes.STRING
        },
        category_id:{
            type: dataTypes.INTEGER,
        }
        
    })
    
    // let alias = "categorias";
    // let columnas = {
    //   id : {
    //       type: dataTypes.INTEGER, 
    //       primaryKey: true,
    //       autoIncrement: true,
    //     },
    //   nombre:{
    //        type: dataTypes.STRING
    //   },
    //   descripcion:{
    //     type: dataTypes.STRING
    //   },
    //     precio: dataTypes.FLOAT
    // };
    // let config = {
    //     tableName : "categoria",
    //     timestamps : false
    // }
    
    const productos = sequelize.define(id, name,  description, price, image, category_id);
    
    return productos;
    } 