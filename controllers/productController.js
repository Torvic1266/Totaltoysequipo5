const path = require('path');
const fs = require('fs');
const { join } = require('path');
/* const render  = require("ejs")
const productDetail  = require("./main") */

const productController = {
    // ruta de productos para el listado de productos punto 1 sprin 4 entregable 
    list: (req,res) => {
        res.render('listado',{ products });
    },
// punto 2 la ruta del formulario de creacion de productos entregable
    create: (req,res) => {
        res.render('createProduct')
    },


    detail: function (req, res){
        res.render ('productDetail')
    },
    carritoCompras: (req,res) => {
        res.render('productcart')
    },  
    
    guardar: (req,res) => {
        let rutaProducts = path.join(__dirname,"../data/products.json");

        let productoGuardado = {
            nombre: req.body.nombre,
            precio: req.body.precio,
            imagen: req.file.originalname,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria
        };

        let archivoproducto = fs.readFileSync(rutaProducts, {
            encoding:"utf-8"
        });
        let productos;
        if (archivoproducto == ''){
            productos = [];
        } else {
            productos = JSON.parse(archivoproducto);
        }
        let newId = maxid + 1;
        productoGuardado.id = newId;
        productos.push(productoGuardado);
        productosJSON = JSON.stringify(productos, null, ' ');
        fs.writeFileSync(rutaProducts,productosJSON);
        res.redirect('/');
    },

    singleDetail: (req,res) => { 
        let productoEncontrado = productos.find(products => products.id === req.params.id);
        res.render("detail",{"productos": productoEncontrado})
     },
     editarFormulario: (req,res) => {
        let productoEncontrado = productos.find(products => products.id === req.params.id);
        res.render("editarProduct",{"productos": productoEncontrado });
     },
     editar: (req,res) => {
        let idProduct = req.params.id
        let products = productos;
        let productToEdit = products.findIndex(product => product.id === idProduct);
        if (req.method ==='PUT') {
        const data = req.body;
        products[productToEdit] = {...products[productToEdit], ...data}
        fs.writeFileSync(productsFilepath, JSON.stringify(products, null, ' '));
        }
        res.render('listadoProductos' , {"productos": productos })
     },
     destroy: (req, res) => {
        res.send("Estoy borrando un producto");
     }
     
     }

     module.exports = productController;