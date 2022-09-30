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


router.get('/register', guestMiddleware, usersController.register);

router.post('/register', guestMiddleware, imgAvatar.single('avatar'), validations, usersController.processRegister);

router.get('/login', guestMiddleware, usersController.login);

router.post('/login', usersController.loginProcess);

router.get('/profile', authMiddleware, usersController.profile);

router.post('/logout', usersController.logout);

module.exports = router;


