const router = require('express').Router();
const { getAllTOTALTOYS } = require('../../controllers/api/ApiTotaltoysController');

router.get('/Totaltoys', getAllTOTALTOYS);

module.exports = router;git