/* ---- REQUERIR MODULOS ---- */

const express = require("express");
const path = require("path");
const app = express();


/* ---- EJEUCTAR LISTEN PARA INICIAR SERVIDOR --- */

app.listen(3060, () =>
 console.log("Servidor activo")
);


/* ---- DECLARAMOS LA RUTA Y EL ARCHIVO QUE QUEREMOS VISUALIZAR --- */

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"));
   });
   


/* ---- EJECUTAMOS PATH PARA CRER RUTA ABSOLUTA DE LA CARPETA PUBLIC --- */

const publicPath = path.resolve(__dirname, "./public");
   app.use(express.static(publicPath));