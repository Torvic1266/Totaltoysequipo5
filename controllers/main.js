const { response } = require("express");
const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const main = {
    index: (req,res)=>{
    res.render("index",{products}); 
       
    }, 
    detalle:(req,res)=>{
        let producto = menu.find(producto => producto.id ===  req.params.id);
        return res.render("detalleMenu",{producto});
    },
    productDetail: (req,res)=>{

            let id = req.params.id
            let product = products.find(products => products.id == id)
           res.render("productDetail" ,{product:product})
           
    },

    /* create:(req ,res) =>{
        res.render("ForCreacion") ;

    }, */

    /* guardar: (req, res) => {
let rutaProducts = path.join(__dirname, '../data/products.json');
        let productoGuardado = {
            
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            precio: req.body.precio 
        };
        let archivoproducto = fs.readFileSync(rutaProducts, { encoding: 'utf-8' });
        let productos;
        if (archivoproducto == '') {
            productos = [];
        } else {
            productos = JSON.parse(archivoproducto);
        }
        productos.push(productoGuardado);
        productosJSON = JSON.stringify(productos, null, ' ');
        fs.writeFileSync(rutaProducts, productosJSON);
        res.redirect('/');
    }, */
   
    
}

module.exports = main;