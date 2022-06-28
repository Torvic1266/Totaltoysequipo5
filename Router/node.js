const express = require ("express");
const router = express.Router();
const menuController = require("../controller/menuController.js");


router.get("/", menuController.index);
router.get("/detalle/:id", menuController.detalle);

module.exports = router;