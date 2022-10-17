const path = require("path");
const fs = require("fs");
const { join } = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");


//const User = require("../models/Usuario");
const db = require('../database/models');


const Controller = {
  
  /*
  // CRUD (Create): LISTAR USUARIOS ??? (usuario admin)
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
    });*/

  register: (req, res) => {
    res.render("register");
  },

  processRegister: (req, res) => {
    res.status(200).redirect("/usuario/profile");
  },

  login: (req, res) => {
    return res.render("login");
  },

  profile: (req, res) => {
    console.log("profile");
    return res.render("userProfile", {
    });
  },

  logout: (req, res) => {
    return res.redirect("/");
  },

  /*
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
  },*/

};

module.exports = Controller;
