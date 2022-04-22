const { pokemons } = require('../models')
const CreatePokemonHelper = require('../functions/CreatePokemon')

const { BadRequest } = require('../errors/BadRequest')
const { BaseController } = require('./BaseController')

class CreatePokemon extends BaseController {
    async create(req, res) {
        const { name, Atk, Def, foc } = req.body

        await validateParams(name, Atk, Def, foc)
        const pokemon = await CreatePokemonHelper(name, Atk, Def, foc);
        res.json(pokemon)
    }
}

const validateParams = async (name, Atk, Def, foc) => {
    if(!(name) || !(Atk) || !(Def) || !(foc)){
       throw new BadRequest('Preencha todos os campos')
    }

    if (foc !== 'Ataque' && foc !== 'Defesa') {
        throw new BadRequest('Somente foco em ataque ou defesa')
    }

    const Pokemon = await pokemons.findOne( {where: { name } } )

    if(Pokemon){
        throw new BadRequest('Pokemon já existe')
    }
}

module.exports = new CreatePokemon();