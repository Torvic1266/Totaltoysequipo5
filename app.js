const express = require("express");
const path=require("path");
const app = express();

const publicPath =path.resolve(__dirname,"./public");
app.use(express.static(publicPath));
app.listen(3600,()=> {
    console.log("servidor corriendo en el puerto 3600");
});
app.get("/",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/index.html"));
      
});


app.get("/loguin",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
      
});


app.get("/productDetail",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/productDetail.html"))

      
});
  
app.get("/productcart",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/productcart.html"))
      
});


