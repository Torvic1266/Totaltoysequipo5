const express = require ("express");
const router = express.Router();
const menuController = require("../controllers/main");


router.get("/", menuController.index);
router.get("/detalle/:id", menuController.detalle);
//router.get("/productDetail/:id", menuController.productDetail);

//router.get("/ForCreacion",menuController.create);
//router.post("/ForCreacion",menuController.guardar);

router.get("/facebook",function (req,res){
    res.send("bienvenidos")
});

router.get("/WhatsApp",function (req,res){
    res.send("Deja tu Numero")
});

router.get("/Instagram",function (req,res){
    res.send("Iniciar sección")
});

router.get("/Twitter",function (req,res){
    res.send("Registrarse")
});

router.get("/Contactanos",function (req,res){
    res.send("Direcciones")
});
module.exports = router;