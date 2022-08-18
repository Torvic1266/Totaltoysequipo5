const  render  = require("ejs")
const  productDetail  = require("./main")

const productoController = {

    detail: function (req, res){
        res.render ('productDetail')
    },
    carritoCompras: (req,res) => {
        res.render('productcart')
    },
    create: (req,res) => {
        res.render('createProducts')
    },
    guardar: (req,res) => {
        let rutaProducts = path.join(__dirname,"../data/products.json");

        let productoguardado ={
            nombre: req.body.nombre,
            precio: req.body.precio,
            imagen: req.body.imagen,
            descripcion: req.body.descripcion,
            category: req.body.category
        };
        let archivoproducto = fs.readFileSync(rutaProducts,{
            encoding:"utf-8"
        });
        let productos;
        if (archivoproducto == ''){
            productos = [];
        } else {
            productos = JSON.parse(archivoproducto);
        }
        productos.push(productoguardado);
        productosJSON = JSON.stringify(productos,null, '');
        fs.writeFileSync(rutaProducts,productosJSON);
        res,redirect('/productos/lista');
    },
    list: (req,res) => {
        res.render('litadoProductos',{
            "productos":productos
        });
    },
    singleDetail: (req,res) => { 
    let productoEncontrado = productos.find(products => products.id === req.params.id);
    res.render("detail",{"productos": productoEncontrado})
     },
     editarFormulario: (req,res) => {
        let productoEncontrado = productos.find(products => products.id === req.params.id);
        res.render("editarProduct",{"productos": productoEncontrado });
     },
     editar: (req,res) => {
        let idProduct = req.params.id
        let products = productos;
        let productToEdit = products.findIndex(product => product.id === idProduct);
        if (req.method ==='PUT') {
        const data = req.body;
        products[productToEdit] = {...products[productToEdit], ...data}
        fs.writeFileSync(productsFilepath, JSON.stringify(products, null, ' '));
        }
        res.render('listadoProductos' , {"productos": productos })
     },
     
     }

     module.exports = productController;

 

