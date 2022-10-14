module.exports = (sequelize, dataTypes) => {
    const Roles = sequelize.define ("Roles",{

        id:{
            type: dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING,
            allowNull:false

        }
    },
    {
        timeStamps:false,
        tableName:"Roles",
        underscored:true
    });
    
    
    // Roles.associate = (models) => {
    //     Roles.hasMany(models.Usuarios, {
    //         as : 'Usuarios', 
    //         foreignKey : 'rol_id'
       
    //     })
    // }
    
    return Roles;
    } 
