
const db = require('../../database/models');



const Controller = {
    guardar: async (req, res) => {

        try {

            const totaltoys = await db.totaltoys.findAll({ include: {
                association: 'publisher',
                
            }});

            
            if(herosFromDB){
                const totalHeroes = herosFromDB.length;
                const heroesWithDetail = herosFromDB.map(hero => {
                    return {
                        id: hero.id,
                        slug: hero.slug,
                        name: hero.superhero,
                        detail: `https://dh-heroes-app.herokuapp.com/api/hero-detail/${hero.slug}`,
                    }
                })
                shuffle(heroesWithDetail);
                res.status(200).json({
                    'count': totalHeroes,
                    'data': heroesWithDetail,
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

    getHeroById: async (req, res) => {
        try {
            const hero = await db.Hero.findOne({ 
                include: {
                    association: 'publisher'     
                },
                where: { slug: req.params.slug }
                });
    
            if(hero){
                console.log(hero);
                res.status(200).json({
                    data: hero,
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
                const heroes = await db.Hero.findAll({ where: {publisher_id: 1}});

                if (heroes) {
                    shuffle(heroes);
                    res.status(200).json({
                        count: heroes.length,
                        data: heroes,
                        'status': 200,
                        'msg': 'OK',
                        'enpoint': `/api/heroes/${publisher}`
                    })
                
                    // res.render('index', { heroesJSON : heroes, title: 'DC Comics Heroes' });
                } else {
                    res.render('error', { title: 'Error', msg: 'No hay datos para mostrar' });
                }
                
            } catch (error) {
                console.log(error);
                res.render('error', { title: 'Error', msg: '500 - Ha ocurrido un error interno' });
            }
           

        }else if(publisher === 'marvel'){ //2
            try {
                const heroes = await db.Hero.findAll({ where: {publisher_id: 2}});

                if (heroes) {
                    shuffle(heroes);
                    res.status(200).json({
                        count: heroes.length,
                        data: heroes,
                        'status': 200,
                        'msg': 'OK',
                        'enpoint': `/api/heroes/${publisher}`
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
