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

router.get("/detalle-producto/:id", productController.productDetail);


// punto 5 formulario de edicion de productos
router.get("/editar-product/:id", productController.editarFormulario);

router.get("/carritoDeCompras",productController.carritoCompras);

router.get("/crear-producto", productController.create);



router.get("/listar",productController.list);

router.get("/detail/:id", productController.singleDetail);


//Enrutamiento por post metodo de creacion de productos punto 4

router.post("/crear-producto", upload.single('imagen'), productController.guardar);

//Enrutamiento por put

router.put("/editar-producto/:id", upload.single('imagen'), productController.editar);

//Enrutamiento por delete

router.delete("/productDetail/:id", productController.destroy);

module.exports = router;
