const path = require('path');
const fs = require('fs');
const { join } = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const User = require('../models/User');


const Controller = {
    register: (req, res) => {
        res.render("userRegisterForm");
        
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render('userRegisterform', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        let userInDB = user.findByField('email', req.body.email);

        if (userInDB) {
            return res.render('userRegisterform', {
                errors: {
                    email: {
                        msg: 'este email ya esta registrado'
                    }
                },
                oldData: req.body
            });

        }


        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        let UserCreated =  user.Create (UserToCreate);

        return res.redirect('/user/login');
    },
    login: (req, res) => {
       return res.render("login");
    },
    
    loginProcess: (req, res) => {
       let userToLogin = user.findByField('email', req.body.email);
       
       if(userToLogin) {
       let isOkThePassword = bcryptjs.compareSync(req.body.password,userToLogin.password);
       if (isOkThePassword ){
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if(req.body.remember_user)
        res.cookie('userEmail', req.body.email,{ maxAge: (1000 * 60) * 2 });
       return res.redirect('/user/profile');  
       }
       return res.render('userLoginForm',{
        errors:{
            email:{
                msg:'las credenciales son invalidas'
            }
        }
       });
       }
       return res.render('userLoginForm',{
        errors:{
            email:{
                msg:'no se encuentra este email en nuestra base de datos'
            }
        }
       });
    },

    profile: (req, res) => {
        return res.render('userProfile',{
            user: req.session.userLogged
        });
    
    },
    logout: (req,res) =>{
        res.clearcookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}


    


module.exports = Controller;