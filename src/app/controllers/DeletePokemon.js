const { pokemons } = require('../models')

class DeletePokemon {
  async delete (req, res) {
    PokeName = req.params.name
    await pokemons.destroy({ where: { name: PokeName } } );
    return res.send(JSON.stringify("O Pokemon: " + PokeName + ", foi deletado."));
  }
}

module.exports = new DeletePokemon();