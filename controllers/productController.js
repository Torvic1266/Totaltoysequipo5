const path = require('path');
const fs = require('fs');
const { join } = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
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
// punto 3 creacion de productos 
    singleDetail: (req,res) => { 
        let productoEncontrado = products.find(product => product.id === req.params.id);
        res.render("detail",{"productos": productoEncontrado})
     },
     // punto 5 editar producto
     editarFormulario: (req,res) => {

        let productoEncontrado = products.find(products => products.id ===parseInt (req.params.id));
        if (productoEncontrado){   
        res.render("createProduct",{"producto": productoEncontrado });
     }
     else{
        res.render("error");
     }
    },


productDetail: (req,res)=>{

        let id = req.params.id
        let product = products.find(products => products.id == id)
        res.render("productDetail" ,{product:product})
           
    },    


    detail: function (req, res){
        res.render ('productDetail')
    },
    carritoCompras: (req,res) => {
        res.render('productcart')
    },  
    
    guardar: (req,res) => {
        //let rutaProducts = path.join(__dirname,"../data/products.json");

        let productoGuardado = {
            nombre: req.body.nombre,
            precio: req.body.precio,
            imagen: req.file.originalname,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria
        };

        //let archivoproducto = fs.readFileSync(rutaProducts, {
            encoding:"utf-8"
        //});
        let productos;
        if (products == ''){
            productos = [];
        } else {
            productos = [...products];
        }
        let newId = productos.length + 1;
        productoGuardado.id = newId;
        productos.push(productoGuardado);
        const productosJSON = JSON.stringify(productos, null, '\t');
        fs.writeFileSync(productsFilePath,productosJSON);
        //setTimeout(function(){    
        res.redirect('/productos/detalle-producto/'+newId);
        //}, 3000);
    },

    
     
     editar: (req,res) => {
        let idProduct = req.params.id
        let productToEdit = products.findIndex(product => product.id === parseInt(idProduct));
        if(productToEdit){
            const data = req.body;
            products[productToEdit] = {...products[productToEdit], ...data}
            fs.writeFileSync(productsFilePath, JSON.stringify(products, null, '\t'));
            
            res.redirect('/productos/detalle-producto/'+ idProduct);
         
          }else{
            res.render("error");
          }

        },




       
        
     destroy: (req, res) => {
        res.send("Estoy borrando un producto");
     }
     
     }

     module.exports = productController;