const path = require("path");
const fs = require("fs");
const { join } = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");


const User = require("../models/Usuario");
const db = require('../database/connection');



const Controller = {
  
  
  // CRUD (Create): LISTAR USUARIOS ??? (usuario admin)
  guardar: (req, res) => {
    //let rutaProducts = path.join(__dirname,"../data/products.json");
    const resultadoValidacion = validationResult(req)

        console.log(resultadoValidacion.mapped());

        if (resultadoValidacion.errors.length > 0) {
            return res.render("registro", {
                errors: resultadoValidacion.mapped(),
                datosAntiguos: req.body
            });
        }
        try {
          db.sync().then(() => {                    
        User.create({
            email: req.body.email,
            password: req.body.password,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            edad: req.body.edad,
            nacionalidad: req.body.nacionalidad,
            telefono: req.body.telefono,
            //rol: req.body.rol

        })
            console.log(data);
            res.status(200).redirect("/usuario/profile");
        })
        } catch (error) {
          res.status(400).send('usuario no creado')
        }
    
  },

  register: (req, res) => {
    res.render("register");
  },

  processRegister: (req, res) => {
    res.status(200).redirect("/usuario/profile");
  },

  login: (req, res) => {
    return res.render("login");
  },
  loginProcess: (req, res) => {
    return res.render("userProfile");
  },

  profile: (req, res) => {
    console.log("profile");
    return res.render("userProfile", {
    });
  },

  logout: (req, res) => {
    return res.redirect("/");
  },

 
    //CRUD (Read)://

    listar: (req,res) => {
      db.sync().then(() => {                    
          User.findAll()
          .then(function(usuarios){
              res.render("listado", {usuarios: usuarios})
          }).catch((error) => {
              console.error('Error al listar usuario: ', error);
          });
      }).catch((error) => {
          console.error('Error en la conexión con la base de datos: ', error);
      });
  }
  

}

module.exports = Controller;
