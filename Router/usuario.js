const express = require ("express");
const router = express.Router(); 
const controladorUsuario= require("../controllers/controladorUsuario");

router.get("/registro", controladorUsuario.registro)
router.get("/login", controladorUsuario.login)


module.exports= router;
