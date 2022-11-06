const db = require('../../src/database/connection');
const Producto = require("../../src/database/models/Productos");

const ApiProductController = {
    
    getAllTOTALTOY: async (req, res) => {

        try {

            const totaltoys = await Producto.findAll({
                
            });

            
            if(totaltoys){
                const totalProductos = totaltoys.length;
                const productosWithDetail = totaltoys.map(product => {
                    return {
                        id: product.id,
                        name: product.nombre,
                        descripcion: product.descripcion,
                        categoria: product.categoria
                        //detail: `https://dh-productos-app.herokuapp.com/api/product-detail/${product.slug}`,
                    }
                })
                res.status(200).json({
                    'count': totalProductos,
                    'data': productosWithDetail,
                    'status': 200,
                    'msg': 'OK',
                    'enpoint': '/api/productos',
                });
            }else{
                // res.render('error', { title: 'Error', msg: 'No hay datos para mostrar' });
                res.status(404).json({'msg': 'No hay datos para mostrar'});
            }
            
        } catch (error) {
            console.log(error);
            // res.render('error', { title: 'Error', msg: '500 - Ha ocurrido un error interno' });
            res.status(500).json({'msg': '500 - Ha ocurrido un error interno'});
            
        }

    },

        Totaltoys5: async (req, res) => {
        try {
            const product = await Producto.findOne({ 
                
                where: { id: req.params.id }
                });
    
            if(product){
                console.log(product);
                res.status(200).json({
                    data: product,
                    status: 200,
                    msg: 'OK',
                })
            }else{
                res.status(404).json({'msg': 'No hay datos para mostrar'});
                // res.render('error', { title: 'Error', msg: 'No hay datos para mostrar' });
            }
        } catch (error) {
            // console.log(error);
            res.status(500).json({'msg': '500 - Ha ocurrido un error interno'});
            // res.render('error', { title: 'Error', msg: '500 - Ha ocurrido un error interno' });
        }

    }

       
};

module.exports = ApiProductController;
