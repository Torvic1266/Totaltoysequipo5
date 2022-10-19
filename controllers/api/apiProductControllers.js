
const db = require('../../database/models');



const productController = {
    productDetail: async (req, res) => {

        try {

            const totaltoys = await db.totaltoys.findAll({ include: {
                association: 'Productos_id',
                
            }});

            
            if(totaltoys){
                const totalProductos = totaltoys.length;
                const productosWithDetail = totaltoys.map(product => {
                    return {
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        //detail: `https://dh-heroes-app.herokuapp.com/api/product-detail/${product.slug}`,
                    }
                })
                res.status(200).json({
                    'count': totalProductos,
                    'data': productosWithDetail,
                    'status': 200,
                    'msg': 'OK',
                    'enpoint': '/api/heroes',
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

    editarFormulario: async (req, res) => {
        try {
            const product = await db.totaltoys.findOne({ 
                include: {
                    association: 'productos_id'     
                },
                where: { name: req.params.name }
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

    },

    
    carritoCompras: async (req, res) => {
        const { carritoCompras } = req.params;

        if(carritoCompras === 'dc'){ //1
            try {
                const heroes = await db.totaltoys.findAll({ where: {publisher_id: 1}});

                if (heroes) {
                    shuffle(heroes);
                    res.status(200).json({
                        count: heroes.length,
                        data: heroes,
                        'status': 200,
                        'msg': 'OK',
                        'enpoint': `/api/heroes/${carritoCompras}`
                    })
                
                    // res.render('index', { heroesJSON : heroes, title: 'DC Comics Heroes' });
                } else {
                    res.render('error', { title: 'Error', msg: 'No hay datos para mostrar' });
                }
                
            } catch (error) {
                console.log(error);
                res.render('error', { title: 'Error', msg: '500 - Ha ocurrido un error interno' });
            }
           

        }else if(carritoCompras === 'marvel'){ //2
            try {
                const heroes = await db.Hero.findAll({ where: {publisher_id: 2}});

                if (heroes) {
                    shuffle(heroes);
                    res.status(200).json({
                        count: heroes.length,
                        data: heroes,
                        'status': 200,
                        'msg': 'OK',
                        'enpoint': `/api/heroes/${carritoCompras}`
                    })
                } else {
                    res.status(404).json({
                        'status': 404,
                        'msg': 'No hay datos para mostrar'
                    })

                    // res.render('error', { title: 'Error', msg: 'No hay datos para mostrar' });
                }
                
            } catch (error) {
                // console.log(error);
                res.status(500).json({'msg': '500 - Ha ocurrido un error interno'});
                // res.render('error', { title: 'Error', msg: '500 - Ha ocurrido un error interno' });
            }

        }else{
            res.status(400).json({
                'status': 400,
                'msg': 'Ha realizado una búsqueda inválida'
            })
        }
            // res.render('error', { title: 'Error', msg: 'Ha realizado una búsqueda inválida' });
    

    },




    //CRUD
    
    createHeroAction: async (req, res) => {
        const product = await db.Hero.create({
            slug: req.body.slug,
            superhero: req.body.superhero,
            alter_ego: req.body.alter_ego,
            first_appearance: req.body.first_appearance,
            characters: req.body.character,
            publisher_id: req.body.carritoCompras,
        });

        if(product){
            console.log(JSON.stringify(product, null, 4));
            res.redirect('/');
        }else{
            res.redirect('/product/create');
        }

    }



};

module.exports = ApiHeroController;
