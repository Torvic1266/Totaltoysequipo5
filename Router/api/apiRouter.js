const router = require('express').Router();
const ApiProductController = require('../../controllers/api/apiProductControllers');
router.get ('/User/:id', ApiProductController.Totaltoys5);
router.get('/Totaltoys', ApiProductController.getAllTOTALTOY);

const ApiUsuarioController = require('../../src/database/models');
router.get('/User/:id', ApiUsuarioController.getAllregister);
router.get('/loguin',ApiUsuarioController.getAllTOTALTOY);

module.exports = router;