const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require('path');
//const menu = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/menu.json"), 'utf-8'));

const main = {
    index: (req,res)=>{
        res.render("index"/*,{menu}*/);      
    }, 
    detalle:(req,res)=>{
        let producto = menu.find(producto => producto.id ===  req.params.id);
        return res.render("detalleMenu",{producto});
    },
    productDetail: (req,res)=>{
            res.render("productDetail");    
    }
}








module.exports = main;