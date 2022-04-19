const { pokemons } = require('../models')

module.exports = async (name, Atk, Def, Nivel, foc) => {
    let AtkAtual
    let DefAtual
    
    if (foc == 'Ataque'){
        AtkAtual = Atk + ( 7 * Nivel)
        DefAtual = Def + ( 3 * Nivel) 
    }else if (foc == 'Defesa') {
        AtkAtual = Atk + ( 3 * Nivel)
        DefAtual = Def + ( 7 * Nivel) 
    }else{
        return res.end(JSON.stringify('Somente foco em ataque ou defesa'))
    }
    pokemons.create({
        name: name,
        p_Atk_Base: Atk,
        p_Def_Base: Def,
        p_Atk_Atual: AtkAtual,
        p_Def_Atual: DefAtual,
        nivel: Nivel,
        foco: foc
    });

    const StatPokemon = JSON.stringify(`name: ${name}, Atk: ${Atk}, Def: ${Def}, AtkAtual: ${AtkAtual}, DefAtual: ${DefAtual}, Nivel: ${Nivel}, foco: ${foc}`)

    return StatPokemon
}    