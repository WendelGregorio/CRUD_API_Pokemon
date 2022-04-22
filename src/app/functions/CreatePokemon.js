const { pokemons } = require('../models')

module.exports = async (name, Atk, Def, foc) => {
    let AtkAtual
    let DefAtual
    
    if (foc == 'Ataque'){
        AtkAtual = Atk + ( 7 )
        DefAtual = Def + ( 3 ) 
    }else if (foc == 'Defesa') {
        AtkAtual = Atk + ( 3 )
        DefAtual = Def + ( 7 ) 
    }

    return pokemons.create({
        name: name,
        p_Atk_Base: Atk,
        p_Def_Base: Def,
        p_Atk_Atual: AtkAtual,
        p_Def_Atual: DefAtual,
        nivel: 1,
        foco: foc
    });
}    