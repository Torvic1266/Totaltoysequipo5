module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define ("usuarios",{

        id:{
            type: dataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: dataTypes.STRING,
            allowNull:false

        },
        last_name:{
            type: dataTypes.STRING,
            allowNull:false
        },
        email:{
            type: dataTypes.STRING,
            allowNull:false
        },
        password:{
            type: dataTypes.STRING,
            allowNull:false
        },
        imagen:{
            type: dataTypes.STRING,
            allowNull:true,
        },
        
        is_active:{ 
            type: dataTypes.INTEGER,
            defaultValue:1
        },
        rol_id:{ 
            type: dataTypes.INTEGER,
            defaultValue:1
        }
        
    },
    {
        timeStamps:false,
        tableName:"usuarios",
        underscored:true
    });
    
    
   User.associate = (models) => {
       /* User.BelongTo(models.Roles, {
            as : 'Roles', 
            foreignKey : 'rol_id'
       
        })*/
    
    }
    return  User;
    
}
