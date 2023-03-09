
const db = require('../../database/models');



const Controller = {
    register: async (req, res) => {

        try {

            const totaltoys = await db.totaltoys.findAll({ include: {
                association: 'rol_id',
                
            }});

            
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
            const users = await db.totaltoys.findOne({ 
                include: {
                    association: 'rol_id'     
                },
                where: { firstName: req.params.firstName }
                });
    
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
                const usuarios = await db.totaltoys.findAll({ where: {publisher_id: 1}});

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
           

        }else if(profile === 'marvel'){ //2
            try {
                const usuarios = await db.totaltoys.findAll({ where: {publisher_id: 2}});

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
    

    },




    //CRUD
    
    createHeroAction: async (req, res) => {
        const hero = await db.Hero.create({
            slug: req.body.slug,
            superhero: req.body.superhero,
            alter_ego: req.body.alter_ego,
            first_appearance: req.body.first_appearance,
            characters: req.body.character,
            publisher_id: req.body.profile,
        });

        if(hero){
            console.log(JSON.stringify(hero, null, 4));
            res.redirect('/');
        }else{
            res.redirect('/hero/create');
        }

    }



};

module.exports = ApiUserController;

