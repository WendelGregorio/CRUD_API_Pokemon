const routes = require('express').Router();

const { GetPokemon, CreatePokemon, UpdatePokemon, DeletePokemon } = require('./app/controllers')

routes.get('/pokemon', GetPokemon.getAll)
routes.get('/pokemon/:name', GetPokemon.getByName)

routes.post('/pokemon', CreatePokemon.execute('create'));
routes.patch('/pokemon/:name',UpdatePokemon.store)
routes.delete('/pokemon/:name', DeletePokemon.delete)


module.exports = routes;