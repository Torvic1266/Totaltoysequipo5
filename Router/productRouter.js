const express = require ("express");
const router = express.Router();
const productController = require('../controllers/productController');

router.get("/productDetail", productController.detail);

router.get("/carritoDeCompras",productController.carritoCompras);

router.get("/createProduct", productController.create);

router.get("/editarProduct/:id", productController.editarFormulario);

router.get("lista",productController.list);

router.get("/detail/:id", productController.singleDetail);


router.post("/editarProduct",productController.guardar);

router.put("/editarProduct/:id", productController.editar);

router.delete("/editarProduct/:id", productController.delete);

module.exports = router;
