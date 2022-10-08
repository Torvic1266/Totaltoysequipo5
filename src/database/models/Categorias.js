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



Categorias.associate = (models) => {
    Categorias.belongsTo(models.Productos, {
            as : 'Productos', 
            foreignKey : 'Productos_id'
        })
    }
    
    return Categorias;
    } 