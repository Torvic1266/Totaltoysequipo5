const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');
const path = require ('path');
const packageName = ('packageName');
const {body } = require( 'express-validator');
const multer = require("multer");
const uploadFile = require('../middlewares/multerMiddleware');
const validations = [ 
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('apellido').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('email')
    .notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    /*body('avatar').custom((value,{ req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','gif'];
       
        if (!file){
            throw new error ('Tienes que subir una imagen');
       } else {
        let fileExtension = path.extname(file.originalname);
        if (! acceptedExtensionsfons.includes(fileExtension)){
            throw new Error('Las extensiones de archivo permitidas son ${acceptedExtensions.join(' ,')}');

        }
      }
       
        return true;
    })*/
    
]      
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require("../middlewares/authMiddleware");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/avatar')
    },
    filename: (req, file, cb) => {
        console.log(file);
        let filename = file.originalname
        cb(null, filename)
    }
})

const imgAvatar = multer({storage});


router.get('/register', usersController.register);

router.post('/register', imgAvatar.single('avatar'), validations, usersController.guardar);

router.get('/login', usersController.login);
    
router.post('/login', usersController.loginProcess);

router.get('/profile', usersController.profile);

router.post('/logout', usersController.logout);

module.exports = router;


