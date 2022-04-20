const { pokemons } = require('../models')
const CreatePokemon = require('../functions/CreatePokemon')
class ValidPokemon{
    async store(req, res) {
        const { name, Atk, Def, Nivel, foc } = req.body

        if(!(name) || !(Atk) || !(Def) || !(Nivel) || !(foc)){
            
            return res.end(JSON.stringify("Preencha todos os campos"))            
        }

        const Pokemon = await pokemons.findOne( {where: { name } } )

        if(Pokemon){
            return res.end(JSON.stringify("Pokemon já existe"))  
        }

        

        CreatePokemon(name, Atk, Def, Nivel, foc);

        let AtkAtual
        let DefAtual
        
        if (foc == 'Ataque'){
            AtkAtual = Atk + ( 7 * Nivel)
            DefAtual = Def + ( 3 * Nivel) 
        }else if (foc == 'Defesa') {
            AtkAtual = Atk + ( 3 * Nivel)
            DefAtual = Def + ( 7 * Nivel) 
        }

        res.send(JSON.stringify(`Pokemon criado, name: ${name}, Atk: ${Atk}, Def: ${Def}, AtkAtual: ${AtkAtual}, DefAtual: ${DefAtual}, Nivel: ${Nivel}, foco: ${foc}`))
    }
}

module.exports = new ValidPokemon();