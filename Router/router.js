const express = require ("express");
const router = express.Router();
const menuController = require("../controllers/main");
const routerProductos = require("./productRouter");
const userRouter = require('./userRouter');

router.get("/", menuController.index);
router.use("/productos", routerProductos);
router.use("/usuario", userRouter);

module.exports = router;