
module.exports = (sequelize, dataTypes) => {
let alias = "categorias";
let columnas = {
  id : {
      type: dataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
    },
  nombre:{
       type: dataTypes.STRING
  },
  descripcion:{
    type: dataTypes.STRING
  },
    precio: dataTypes.FLOAT
};
let config = {
    tableName : "categoria",
    timestamps : false
}

const categoria = sequelize.define(alias, columnas, config);

return categoria;
} 