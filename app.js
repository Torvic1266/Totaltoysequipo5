const express = require("express");
const path = require('path');
const methodOverride = require('method-override')
const session = require("express-session"); 
const cookies = require('cookie-parser');

const app = express();
const  userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');


const path = require("path");

app.use(session({
    secret:"shhh, it's a secret",
    resave: false,
    saveUninitialized:false,
}));

app.use(cookies());

app.use(userLoggedMiddleware);

app.set("view engine","ejs");

const routerProductos = require("./Router/productRouter");
const userRouter = require('./Router/userRouter');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("./public"));

const publicPath =path.resolve(__dirname,"./public");


  
app.get("/productcart",(req, res)=>{
    res.render("productcart.ejs")
      
});


//app.use("/usuario", routerUsuario);
app.use("/", routerProductos);
app.use("/user", userRouter);



app.use(express.static(publicPath));
app.listen(3001,()=> {
    console.log("servidor corriendo en el puerto 3001");
});