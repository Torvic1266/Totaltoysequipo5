
module.exports = (sequelize, dataTypes) => {
  const Usuarios = sequelize.define ("Usuarios",{

      id:{
          type: dataTypes.INTEGER, 
          primaryKey: true,
          autoIncrement: true
      },
      firstName :{
          type: dataTypes.STRING,
          allowNull:false
      },
      lastName :{
          type: dataTypes.STRING,
          allowNull:false
      },
      email:{
          type: dataTypes.FLOAT,
          allowNull:false
      },
      password : {
          type: dataTypes.STRING,
          allowNull:false
      },
      image:{
          type: dataTypes.STRING,
          allowNull:false
      },
      is_active:{ 
        type: dataTypes.INTEGER,
        defaultValue:1
    }
      
  }, {
    timeStamps:false,
    tableName:"usuarios",
    underscored:true
  });




  Usuarios.associate = (models) => {
    Usuarios.hasMany(models.Roles, {
        as : 'Roles', 
        foreignKey : 'Usuarios_id'
   
    })



return usuarios;
} 
}