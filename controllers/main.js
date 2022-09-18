const { response } = require("express");
const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const main = {
    index: (req,res)=>{
    res.render("index", {products}); 
       
    }, 
    detalle:(req,res)=>{
        let producto = menu.find(producto => producto.id ===  req.params.id);
        return res.render("detalleMenu",{producto});
    },
    
}

module.exports = main;