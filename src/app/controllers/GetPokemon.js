const { pokemons } = require('../models')

class GetPokemon {
  async getAll(req, res) {
    const statsPokemons = await pokemons.findAll();
    return res.send(JSON.stringify(statsPokemons));
  }

  async getByName(req, res) {
    PokeName = req.params.name
    const Pokemon = await pokemons.findAll({ where: { name: PokeName } } );
    return res.send(JSON.stringify(Pokemon));
  }
}

module.exports = new GetPokemon();