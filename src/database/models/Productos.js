/**
 * Import Sequelize.
 */
 const { Sequelize, DataTypes } = require("sequelize");

 /**
  * Import the Sequelize instance that you have exported
  * in the config/database.js file.
  */
 const sequelize = require("../connection");
 
 /**
  * Define a model that can be managed by Sequelize.
  */
 const Producto = sequelize.define(
    "Productos",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        urlImagen: {
        type: DataTypes.STRING,
        }
    },
    {
    timestamps: false,
    }
);

/*
sequelize.sync().then(() => {
console.log('Tabla de productos OK');

Producto.create({
    nombre: "Lego Bionicle",
    descripcion: "Juguete de colección",
    precio: "10000",
    categoria: 3,
    urlImagen: "prueba"
}).then(res => {
    console.log(res)
}).catch((error) => {
    console.error('Failed to create a new record: ', error);
});

}).catch((error) => {
console.error('Error en la tabla productos: ', error);
});*/

Producto.associate = function (models) {
    Producto.belongsTo(models.Categorias, { 
        as: "Categoria",
        foreignKey: "Categoria"
    })
    

}
module.exports = Producto
