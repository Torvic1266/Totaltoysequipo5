const express = require ("express");
const router = express.Router();
const menuController = require("../controllers/main");


router.get("/", menuController.index);
router.get("/detalle/:id", menuController.detalle);
router.get("/productDetail/:id", menuController.productDetail);
router.get("/ForCreacion",menuController.create);
router.post("/ForCreacion",menuController.guardar);



module.exports = router;