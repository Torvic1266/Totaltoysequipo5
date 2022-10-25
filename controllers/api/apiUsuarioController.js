const db = require('../../src/database/models');


const ApiUsuarioController = {
    
    getAllregister: async (req, res) => {

        try {

         const totaltoys = await db.findAll();
            
            if(totaltoys){
                const totalUsuarios = totaltoys.length;
                const UsuariosWithDetail = totaltoys.map(users => {
                    return {
                        id: users.id,
                        name: users.firstName,
                        email : users.email,
                       // detail: `https://dh-usuarios-app.herokuapp.com/api/users-detail/${users.slug}`,
                    }
                })
                res.status(200).json({
                    'count': totalUsuarios,
                    'data': UsuariosWithDetail,
                    'status': 200,
                    'msg': 'OK',
                    'enpoint': '/api/usuarios',
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

module.exports = ApiUsuarioController;

