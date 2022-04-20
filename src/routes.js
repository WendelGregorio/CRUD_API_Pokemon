const routes = require('express').Router();
const { pokemons } = require('../src/app/models')
const ValidPokemon = require('./app/controllers/ValidatePokemon')
const UpdatePokemon = require('./app/controllers/UpdatePokemon')

routes.post('/pokemon', ValidPokemon.store);

routes.get('/pokemon', async (req, res) => {

    const statsPokemons = await pokemons.findAll();

    return res.send(JSON.stringify(statsPokemons));
})

routes.get('/pokemon/:name', async (req, res) => {
    PokeName = req.params.name
    const Pokemon = await pokemons.findAll({ where: { name: PokeName } } );
    return res.send(JSON.stringify(Pokemon));
})

routes.patch('/pokemon/:name',UpdatePokemon.store)

module.exports = routes;