const router = require('express').Router();
const TotaltoysRouter = require('./Totaltoys');
const apiRouter = require('./api/apiRouter');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.use('/', TotaltoysRouter);
router.use('/api', apiRouter);


module.exports = router;
