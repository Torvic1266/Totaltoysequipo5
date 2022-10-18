
const db = require('../../database/models');



const Controller = {
    guardar: async (req, res) => {

        try {

            const totaltoys = await db.totaltoys.findAll({ include: {
                association: 'publisher',
                
            }});

            
            if(totaltoys){
                const totalUsuarios = totaltoys.length;
                const UsuariosWithDetail = totaltoys.map(users => {
                    return {
                        id: users.id,
                        name: users.firstName,
                        email : users.email,
                        detail: `https://dh-usuarios-app.herokuapp.com/api/users-detail/${users.slug}`,
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

    getHeroById: async (req, res) => {
        try {
            const users = await db.Hero.findOne({ 
                include: {
                    association: 'publisher'     
                },
                where: { slug: req.params.slug }
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

    getHeroesByPublisher: async (req, res) => {
        const { publisher } = req.params;

        if(publisher === 'dc'){ //1
            try {
                const usuarios = await db.totaltoys.findAll({ where: {publisher_id: 1}});

                if (usuarios) {
                    res.status(200).json({
                        count: usuarios.length,
                        data: usuarios,
                        'status': 200,
                        'msg': 'OK',
                        'enpoint': `/api/usuarios/${publisher}`
                    })
                
                    // res.render('index', { heroesJSON : usuarios, title: 'DC Comics Heroes' });
                } else {
                    res.render('error', { title: 'Error', msg: 'No hay datos para mostrar' });
                }
                
            } catch (error) {
                console.log(error);
                res.render('error', { title: 'Error', msg: '500 - Ha ocurrido un error interno' });
            }
           

        }else if(publisher === 'marvel'){ //2
            try {
                const usuarios = await db.Hero.findAll({ where: {publisher_id: 2}});

                if (usuarios) {
                    res.status(200).json({
                        count: usuarios.length,
                        data: usuarios,
                        'status': 200,
                        'msg': 'OK',
                        'enpoint': `/api/usuarios/${publisher}`
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
            publisher_id: req.body.publisher,
        });

        if(hero){
            console.log(JSON.stringify(hero, null, 4));
            res.redirect('/');
        }else{
            res.redirect('/hero/create');
        }

    }



};

module.exports = ApiHeroController;

