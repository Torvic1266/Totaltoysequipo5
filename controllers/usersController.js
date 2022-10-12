const path = require("path");
const fs = require("fs");
const { join } = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");


//const User = require("../models/User");
const db = require('../src/database/models');


const Controller = {
  register: (req, res) => {
    res.render("register");
  },
  processRegister: (req, res) => {
     /*const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("login", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    let userInDB = User.findByField("email", req.body.email);

    if (userInDB) {
      return res.render("user.json", {
        errors: {
          email: {
            msg: "este email ya esta registrado",
          },
        },
        oldData: req.body,
      });
    }*/
    try {
      let userToCreate = {
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10),
      //  avatar: req.file.filename,
      };
      console.log(userToCreate);
  
      db.User.create(userToCreate); 
      console.log(req.file)
  
      res.status(200).redirect("/usuario/login");
    } catch (error) {
      console.log(error);
      res.status(400).send(error)
    }

    
  },
  login: (req, res) => {
    return res.render("login");
  },

  loginProcess: (req, res) => {
    let userToLogin = User.findByField("email", req.body.email);

    if (userToLogin) {
      //let isOkThePassword = req.body.password === userToLogin.password
      let isOkThePassword = bcrypt.compareSync(
        req.body.password,
        bcrypt.hashSync(userToLogin.password, 10)
      );
      if (isOkThePassword) {
        req.session.userLogged = userToLogin;

        if (req.body.remember_user)
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 2 });
        return res.redirect("/usuario/profile");
      }
      return res.render("login", {
        errors: {
          email: {
            msg: "las credenciales son invalidas",
          },
        },
      });
    }
    return res.render("login", {
      errors: {
        email: {
          msg: "no se encuentra este email en nuestra base de datos",
        },
      },
    });
  },

  profile: (req, res) => {
    return res.render("userProfile", {
      user: req.session.userLogged
    });
  },
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = Controller;
