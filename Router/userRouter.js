const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');
const multer = require("multer");
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
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


