const express = require("express");
const path=require("path");
const app = express();
app.set("view engine","ejs");

const publicPath =path.resolve(__dirname,"./public");
app.use(express.static(publicPath));
app.listen(3001,()=> {
    console.log("servidor corriendo en el puerto 3001");
});
app.get("/",(req, res)=>{
    res.render("index.ejs");
      
});


app.get("/login",(req, res)=>{
    res.render("login.ejs")
      
});


app.get("/productdetail",(req, res)=>{
    res.render("productDetail.ejs")

      
});
  
app.get("/productcart",(req, res)=>{
    res.render("productcart.ejs")
      
});
app.get("/register",(req, res)=>{
    res.render("register.ejs")
      
});


