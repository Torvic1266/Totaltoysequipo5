const express = require ("express");
const router = express.Router();
const multer = require('multer');
const productController = require('../controllers/productController');
const path = require('path');

//Activación del multer para la carga de imágenes

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img/ninos'))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage});

//Enrutamiento por get

router.get("/productDetail", productController.detail);
router.get("/carritoDeCompras",productController.carritoCompras);
router.get("/createProduct", productController.create);
router.get("/editarProduct/:id", productController.editarFormulario);
router.get("/lista",productController.list);
router.get("/detail/:id", productController.singleDetail);

//Enrutamiento por post

router.post("/createProduct/:id/eliminar", upload.single('imagen'), productController.guardar);

//Enrutamiento por put

router.put("/productDetail/:id", upload.single('imagen'), productController.editar);

//Enrutamiento por delete

router.delete("/productDetail/:id", productController.destroy);

module.exports = router;
