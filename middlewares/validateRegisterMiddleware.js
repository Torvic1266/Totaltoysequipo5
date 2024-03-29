const path = require ('path');
const packageName = ('packageName');
const {body } = require( 'express-validator');

const validateRegisterMiddleware = [ 
    body('firstName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un nombre'),
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

module.exports = validateRegisterMiddleware;