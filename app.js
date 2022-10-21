const express = require("express");

const path = require('path');
const methodOverride = require('method-override')
const session = require("express-session"); 
const cookies = require('cookie-parser');

const routerMain = require("./Router/router");

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

const app = express();

const db = require("./src/database/connection");

app.use(session({
    secret:"shhh, it's a secret",
    resave: false,
    saveUninitialized:false,
}));

app.use(cookies());
app.use(methodOverride ("_method"));
app.use(userLoggedMiddleware);

app.set("view engine","ejs");
app.set("views", "./views");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("./public"));

const publicPath =path.resolve(__dirname,"./public");

app.get("/productcart",(req, res)=>{
    res.render("productcart.ejs")
});

app.use("/", routerMain);


app.use(express.static(publicPath));




app.listen((process.env.PORT || 3001),()=> {
    console.log("servidor corriendo en el puerto 3001");
});