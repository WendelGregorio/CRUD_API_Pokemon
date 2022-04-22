const { pokemons } = require('../models')
const GetStatsUpdate = require('../functions/CreateStatsUpdate')
class UpdatePokemon{
    async store(req, res) {
        const { Atk, Def, Nivel, foc } = req.body
        const PokeName = req.params.name

        

        const StatsUpdated = await GetStatsUpdate(Atk, Def, Nivel, foc, PokeName)

        pokemons.update(StatsUpdated,{ where : { name: PokeName} });

        res.end(JSON.stringify('Update realizado'));

    }
}

module.exports = new UpdatePokemon();