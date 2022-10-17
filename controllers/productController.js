const path = require('path');
const fs = require('fs');
const { join } = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const render  = require("ejs")
const productDetail  = require("./main")

const db = require("../database/connection");
const Producto = require("../models/Producto")

const productController = {
    // ruta de productos para el listado de productos punto 1 sprin 4 entregable 

    // CRUD (Read):
    list: (req,res) => {
        db.sync().then(() => {                    
            Producto.findAll()
            .then(function(productos){
                res.render("listado", {Productos: productos})
            }).catch((error) => {
                console.error('Error al listar productos: ', error);
            });
        }).catch((error) => {
            console.error('Error en la conexión con la base de datos: ', error);
        });
    },

    // punto 2 la ruta del formulario de creacion de productos entregable

    // CRUD (Create):
    guardar: (req, res) => {
        //let rutaProducts = path.join(__dirname,"../data/products.json");
        db.sync().then(() => {                    
            Producto.create({
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                categoria: req.body.categoria,
                urlImagen: req.body.urlImagen,
            }).then(data => {
                console.log(data);
                res.redirect("/");
            }).catch((error) => {
                console.error('Error al crear producto: ', error);
            });
        }).catch((error) => {
            console.error('Error en la conexión con la base de datos: ', error);
        });
    },

    // punto 3 creacion de productos 
    singleDetail: (req,res) => {
        res.render("detail")
    },
    // punto 5 editar producto
    editarFormulario: (req,res) => {  
    res.render("createProduct");
    },
    create: (req,res) => {  
        res.render("createProduct");
        },

    productDetail: (req,res)=>{
        res.render("productDetail")
    },

    detail: function (req, res){
        res.render ('productDetail')
    },

    carritoCompras: (req,res) => {
        res.render('productcart')
    }, 
    editar: (req,res) => {
        res.redirect('/productos/detalle-producto/');
    },
    destroy: (req, res) => {
        res.redirect("/");
    },
}

module.exports = productController;