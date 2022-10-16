/*
const fs = require('fs');
const path = require('path');
const db = require('../database/models');
// const heroModel = require('../database/models/hero'); 

const productsJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf-8'));

const productController = {
    list: async (req, res) => {

        try {

            const totaltoys = await db.Hero.findAll({ include: {
                association: 'publisher',
                
            }});
            if(totaltoys){
                shuffle(totaltoys);
                res.render('index', { heroesJSON: totaltoys, title : 'Heroes App' })
            }else{
                res.render('error', { title: 'Error', msg: 'No hay datos para mostrar' });
            }
            
        } catch (error) {
            console.log(error);
            res.render('error', { title: 'Error', msg: '500 - Ha ocurrido un error interno' });
            
        }

    },

    getHeroById: async (req, res) => {
        // const hero = heroesJSON.find(hero => {
        //     return  hero.id === req.params.slug;
        // })
        // const { slug } = req.params;
        // db.hero.findOne({where: {slug: req.params.slug}})
        // .then(hero => {
        //     res.render('hero', { hero, title: 'Heroe' })
        // })
        // .catch(error => {
        //     console.log(error);
        // });
        try {
            const hero = await db.Hero.findOne({ 
                include: {
                    association: 'publisher'     
                },
                where: { slug: req.params.slug }
                });
    
            if(hero){
                console.log(hero);
                res.render('hero-details', { hero, title: 'Hero Details' });
            }else{
                res.render('error', { title: 'Error', msg: 'No hay datos para mostrar' });
            }
        } catch (error) {
            console.log(error);
            res.render('error', { title: 'Error', msg: '500 - Ha ocurrido un error interno' });
        }

    },

    getHeroesByPublisher: async (req, res) => {
        const { publisher } = req.params;

        if(publisher === 'dc'){ //1
            try {
                const heroes = await db.Hero.findAll({ where: {publisher_id: 1}});

                if (heroes) {
                    shuffle(heroes);
                    res.render('index', { heroesJSON : heroes, title: 'DC Comics Heroes' });
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
                    res.render('index', { heroesJSON : heroes, title: 'Marvel Comics Heroes' });
                } else {
                    res.render('error', { title: 'Error', msg: 'No hay datos para mostrar' });
                }
                
            } catch (error) {
                console.log(error);
                res.render('error', { title: 'Error', msg: '500 - Ha ocurrido un error interno' });
            }

        }else{
            res.render('error', { title: 'Error', msg: 'Ha realizado una búsqueda inválida' });
        }

    },




    //CRUD

    getCreateHeroForm: (req, res) => {
        res.render('crud/create-hero', { title: 'Create a Hero' });
    },
    
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

module.exports = HeroController;


*/