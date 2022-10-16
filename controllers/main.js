const { response } = require("express");
const express = require("express");
const router = express.Router();

const db = require("../database/connection");
const Producto = require("../models/Producto")

/*
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
*/

const main = {
    index: (req,res)=>{
        db.sync().then(() => {                    
            Producto.findAll()
            .then(function(productos){
                res.render("index", {Productos: productos})
            }).catch((error) => {
                console.error('Error al listar productos: ', error);
            });
        }).catch((error) => {
            console.error('Error en la conexión con la base de datos: ', error);
        });
    },
}

module.exports = main;