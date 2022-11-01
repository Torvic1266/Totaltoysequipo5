const router = require('express').Router();
const ApiProductController = require('../../controllers/api/apiProductControllers');
router.get ('/juguetes/:id', ApiProductController.Totaltoys5);
router.get('/juguetes', ApiProductController.getAllTOTALTOY);

const ApiUsuarioController = require('../../controllers/api/apiUsuarioController');
router.get('/usuario/:id', ApiUsuarioController.getUserById);
router.get('/usuarios', ApiUsuarioController.getAllUsers);

const ApiCategoriasController = require('../../controllers/api/ApiCategoriasController');
router.get('/categorias/:id', ApiCategoriasController.getCategoriasById);
router.get('/categorias', ApiCategoriasController.getAllCategorias);

module.exports = router;