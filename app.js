const express = require("express");
const path=require("path");
const app = express();
app.set("view engine","ejs");
const routerUsuario = require("./Router/usuario");
const routerProductos = require("./Router/node");

const publicPath =path.resolve(__dirname,"./public");

app.use(express.urlencoded({extended:false}));
app.use(express.json());

  
app.get("/productcart",(req, res)=>{
    res.render("productcart.ejs")
      
});

      
app.get("/producto",(req,res)=>{
    res.render("producto.ejs")
});


app.use("/usuario", routerUsuario);
app.use("/", routerProductos);



app.use(express.static(publicPath));
app.listen(3001,()=> {
    console.log("servidor corriendo en el puerto 3001");
});