const routes = require('express').Router();
const { pokemons } = require('../src/app/models')
const ValidPokemon = require('./app/controllers/ValidatePokemon')

routes.post('/pokemon', ValidPokemon.store);

routes.get('/pokemon', async (req, res) => {

    const statsPokemons = await pokemons.findAll();

    return res.send(JSON.stringify(statsPokemons))
})

module.exports = routes;