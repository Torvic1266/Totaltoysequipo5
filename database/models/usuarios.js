
module.exports = (sequelize, dataTypes) => {
  const Usuarios = sequelize.define ("usuarios",{

      id:{
          type: dataTypes.INTEGER, 
          primaryKey: true,
          autoIncrement: true
      },
      firstName :{
          type: dataTypes.STRING
      },
      lastName :{
          type: dataTypes.STRING
      },
      email:{
          type: dataTypes.FLOAT
      },
      password : {
          type: dataTypes.STRING
      },
      image:{
          type: dataTypes.STRING
      },
      category_id:{
          type: dataTypes.INTEGER,
      }
      
  })



return usuarios;
} 