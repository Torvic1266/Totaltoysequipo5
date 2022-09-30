
module.exports = (sequelize, dataTypes) => {
    const Productos = sequelize.define ("productos",{

        id:{},
        nombre:{},
        descripcion:{},
        precio:{},
        imagen:{},
        category_id:{}
        
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
    
    const productos = sequelize.define(id, nombre,  descripcion, precio, imagen, category_id);
    
    return productos;
    } 