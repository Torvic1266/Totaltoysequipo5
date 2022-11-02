
const db = require("../../src/database/models/Categorias");


const ApiCategoriasController = {
    getCategoriasById: async (req, res) => {
        try {
            const CATEGORIA = await db.findOne({ 
                
                where: { id: req.params.id }
                });
    
            if(CATEGORIA){
                console.log(CATEGORIA);
                res.status(200).json({
                    data: CATEGORIA,
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
    getAllCategorias: async (req, res) => {

        try {

         const totaltoys1 = await db.findAll();
            console.log(totaltoys1);
            res.send(totaltoys1);

            if(totaltoys1){
                const totalcategoria = totaltoys1.length;
                const categoriaWithDetail = totaltoys1.map(users => {
                    return {
                        id: categoria.id,
                        name: categoria.firstName,
                        email : categoria.email,
                       // detail: `https://dh-usuarios-app.herokuapp.com/api/users-detail/${users.slug}`,
                    }
                })
                res.status(200).json({
                    'count': totalcategoria,
                    'data': categoriaWithDetail,
                    'status': 200,
                    'msg': 'OK',
                    'enpoint': '/api/categoria',
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

    loguin: async (req, res) => {
        try {
            const users = await db.findOne();
    
            if(users){
                console.log(users);
                res.status(200).json({
                    data: users,
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

    profile: async (req, res) => {
        const { profile } = req.params;

        if(profile === 'dc'){ //1
            try {
                const usuarios = await db.findAll();

                if (usuarios) {
                    res.status(200).json({
                        count: usuarios.length,
                        data: usuarios,
                        'status': 200,
                        'msg': 'OK',
                        'enpoint': `/api/usuarios/${profile}`
                    })
                
                    // res.render('index', { heroesJSON : usuarios, title: 'DC Comics Heroes' });
                } else {
                    res.render('error', { title: 'Error', msg: 'No hay datos para mostrar' });
                }
                
            } catch (error) {
                console.log(error);
                res.render('error', { title: 'Error', msg: '500 - Ha ocurrido un error interno' });
            }
           

        }else if(profile === totaltoys ){ //2
            try {
                const usuarios = await db.findAll();

                if (usuarios) {
                    res.status(200).json({
                        count: usuarios.length,
                        data: usuarios,
                        'status': 200,
                        'msg': 'OK',
                        'enpoint': `/api/usuarios/${profile}`
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
    

    }


 };

module.exports = ApiCategoriasController;

