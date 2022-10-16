const path = require('path');
const fs = require('fs');
const { join } = require('path');
//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const render  = require("ejs")
const productDetail  = require("./main")

const db = require("../database/connection");
const Producto = require("../models/Producto")

const productController = {
    // ruta de productos para el listado de productos punto 1 sprin 4 entregable 
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
            const productsFilePath = path.join(__dirname, '../data/products.json');
            const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
            let product = products.find(products => products.id == id)
            res.render("productDetail" ,{product:product})
               
        },

        detail: function (req, res){
            res.render ('productDetail')
        },

        carritoCompras: (req,res) => {
            res.render('productcart')
        },  
        
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
            /*
            let productoGuardado = {
                nombre: req.body.nombre,
                precio: req.body.precio,
                //imagen: req.file.originalname,
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
            */
        
    
        editar: (req,res) => {
            let idProduct = req.params.id
            let productToEdit = products.findIndex(product => product.id === parseInt(idProduct));
            if(productToEdit){
                const data = req.body;
                products[productToEdit] = {...products[productToEdit], ...data}
                fs.writeFileSync(productsFilePath, JSON.stringify(products, null, '\t'));
                res.redirect('/productos/detalle-producto/'+ idProduct);
            } else {
                res.render("error");
            }
        },
    
        destroy: (req, res) => {
            let contenido=  products.filter(oneRow => oneRow.id != req.params.id);
            let writeFile= products.writeFileSync(this.filePath, fileContents);
            writeFile(contenido);
            res.redirect("/");
        },

        //const { promise } = require("ejs");
        crear: function (req, res){
            db.Producto.findAll()
            .then(function(Producto){
                return res.render("index", {Producto:Producto});
            })
        },

        guardado: function(req, res) {
            db.Producto.create({
                name: req.body.name,
                description: req.body.description,
                price:req.body.price,
                imagen: req.body.imagen,
                category_id: req.body.category_id
            });
            res.redirect("/crear-producto");
        },
        
        listado: function(req, res){
            db.Producto.findAll()
            .then(function(productos){
                res.render("/", {Productos: productos})
            })
        },

        detalle: function(req,res){
            db.Producto.findByPK(req.params.id,{
                include: [{association: "Descripcion"}, {association: "Precio"}]
            })
            .then(function(Producto){
                res.render("detalleProducto", {Producto:Producto});
            })
        },

        editar: function (req, res) {
            let pedidoProducto = db.Producto.findByPK(req.params.id);
    
            //let pedidoProducto = db.Producto.finAll();
    
            promise.all([pedidoProducto, pedidoProducto])
            .then(function({Producto,producto}) {
                res.render("editarProducto", {Producto:producto, Producto:producto})
    
            })
        },

        actualizar: function(req, res) {
            db.Producto.update({
            name: req.body.name,
            description: req.body.description,
            price:req.body.price,
            imagen: req.body.imagen,
            category_id: req.body.category_id
            }, {
                where: {
                    id: req.params.id
                }
            });
            res.redirect("/Producto/" + req.params.id)
        },

        borrar: function(req, res){
            db.Producto.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.redirect("/Productos");
        }
     }
     module.exports = productController;