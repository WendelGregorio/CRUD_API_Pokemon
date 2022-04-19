const CreatePokemon = require('../factories/CreatePokemon')
class ValidPokemon{
    async store(req, res) {
        const { name, Atk, Def, Nivel, foc } = req.body

        if(name == "" || Atk == "" || Def == "" || Nivel == "" || foc == ""){
            
            return res.end(JSON.stringify("Preencha todos os campos"))            
        }

        const Pokemon =  CreatePokemon(name, Atk, Def, Nivel, foc);

        res.send(Pokemon)
    }
}

module.exports = new ValidPokemon();