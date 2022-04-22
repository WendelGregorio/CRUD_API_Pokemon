const { pokemons } = require('../models')

module.exports = async (Atk, Def, lvl, foc, name) =>{

    const Pokemon = await pokemons.findAll({ raw: true, where: { name: name } } );

    const pokemonStats = JSON.stringify(Pokemon)

    let StatReplaced = pokemonStats.replace('[','').replace(']','')

    StatReplaced = JSON.parse(StatReplaced)

    let AtkAtual
    let DefAtual
    let Nivel
    let foco


    if(Atk){
        if (StatReplaced.foco == 'Ataque' && !foc){
            foco = StatReplaced.foco
            if (lvl){
                Nivel = lvl
                AtkAtual = Atk + ( 7 * lvl)
            }else{
                Nivel = StatReplaced.nivel
                AtkAtual = Atk + ( 7 * StatReplaced.nivel)
            }
        }else if (StatReplaced.foco == 'Defesa' && !foc) {
            foco = StatReplaced.foco
            if (lvl){
                Nivel = lvl
                AtkAtual = Atk + ( 3 * lvl)
            }else {
                Nivel = StatReplaced.nivel
                AtkAtual = Atk + ( 3 * StatReplaced.nivel)
            }
        }else if (foc == 'Ataque') {
            foco = foc
            if (lvl){
                Nivel = lvl
                AtkAtual = Atk + ( 7 * lvl)
            }else{
                Nivel = StatReplaced.nivel
                AtkAtual = Atk + ( 7 * StatReplaced.nivel)
            }
        }else if (foc == 'Defesa') {
            foco = foc
            if (lvl){
                Nivel = lvl
                AtkAtual = Atk + ( 3 * lvl)
            }else {
                Nivel = StatReplaced.nivel
                AtkAtual = Atk + ( 3 * StatReplaced.nivel)
            }
        }
    }else {
        Atk = StatReplaced.p_Atk_Base
        if (StatReplaced.foco == 'Ataque' && !foc){
            foco = StatReplaced.foco
            if (lvl){
                Nivel = lvl
                AtkAtual = StatReplaced.p_Atk_Base + ( 7 * lvl)
            }else{
                Nivel = StatReplaced.nivel
                AtkAtual = StatReplaced.p_Atk_Base + ( 7 * StatReplaced.nivel)
            }
        }else if (StatReplaced.foco == 'Defesa' && !foc) {
            foco = StatReplaced.foco
            if (lvl){
                Nivel = lvl
                AtkAtual = StatReplaced.p_Atk_Base + ( 3 * lvl)
            }else {
                Nivel = StatReplaced.nivel
                AtkAtual = StatReplaced.p_Atk_Base + ( 3 * StatReplaced.nivel)
            }
        }else if (foc == 'Ataque') {
            foco = foc
            if (lvl){
                Nivel = lvl
                AtkAtual = StatReplaced.p_Atk_Base + ( 7 * lvl)
            }else{
                Nivel = StatReplaced.nivel
                AtkAtual = StatReplaced.p_Atk_Base + ( 7 * StatReplaced.nivel)
            }
        }else if (foc == 'Defesa') {
            foco = foc
            if (lvl){
                Nivel = lvl
                AtkAtual = StatReplaced.p_Atk_Base + ( 3 * lvl)
            }else {
                Nivel = StatReplaced.nivel
                AtkAtual = StatReplaced.p_Atk_Base + ( 3 * StatReplaced.nivel)
            }
        }
    }

    
    if(Def){
        if (StatReplaced.foco == 'Defesa' && !foc){
            foco = StatReplaced.foco
            if (lvl){
                Nivel = lvl
                DefAtual = Def + ( 7 * lvl)
            }else{
                Nivel = StatReplaced.nivel
                DefAtual = Def + ( 7 * StatReplaced.nivel)
            }
        }else if (StatReplaced.foco == 'Ataque' && !foc) {
            foco = StatReplaced.foco
            if (lvl){
                Nivel = lvl
                DefAtual = Def + ( 3 * lvl)
            }else {
                Nivel = StatReplaced.nivel
                DefAtual = Def + ( 3 * StatReplaced.nivel)
            }
        }else if (foc == 'Defesa') {
            foco = foc
            if (lvl){
                Nivel = lvl
                DefAtual = Def + ( 7 * lvl)
            }else{
                Nivel = StatReplaced.nivel
                DefAtual = Def + ( 7 * StatReplaced.nivel)
            }
        }else if (foc == 'Ataque') {
            foco = foc
            if (lvl){
                Nivel = lvl
                DefAtual = Def + ( 3 * lvl)
            }else {
                Nivel = StatReplaced.nivel
                DefAtual = Def + ( 3 * StatReplaced.nivel)
            }
        }
    }else {
        Def = StatReplaced.p_Def_Base
        if (StatReplaced.foco == 'Defesa' && !foc){
            foco = StatReplaced.foco
            if (lvl){
                Nivel = lvl
                DefAtual = StatReplaced.p_Def_Base + ( 7 * lvl)
            }else{
                Nivel = StatReplaced.nivel
                DefAtual = StatReplaced.p_Def_Base + ( 7 * StatReplaced.nivel)
            }
        }else if (StatReplaced.foco == 'Ataque' && !foc) {
            foco = StatReplaced.foco
            if (lvl){
                Nivel = lvl
                DefAtual = StatReplaced.p_Def_Base + ( 3 * lvl)
            }else {
                Nivel = StatReplaced.nivel
                DefAtual = StatReplaced.p_Def_Base + ( 3 * StatReplaced.nivel)
            }
        }else if (foc == 'Defesa') {
            foco = foc
            if (lvl){
                Nivel = lvl
                DefAtual = StatReplaced.p_Def_Base + ( 7 * lvl)
            }else{
                Nivel = StatReplaced.nivel
                DefAtual = StatReplaced.p_Def_Base + ( 7 * StatReplaced.nivel)
            }
        }else if (foc == 'Ataque') {
            foco = foc
            if (lvl){
                Nivel = lvl
                DefAtual = StatReplaced.p_Def_Base + ( 3 * lvl)
            }else {
                Nivel = StatReplaced.nivel
                DefAtual = StatReplaced.p_Def_Base + ( 3 * StatReplaced.nivel)
            }
        }
    }

    const StatsUpdated = {
        p_Atk_Base: Atk,
        p_Def_Base: Def,
        p_Atk_Atual: AtkAtual,
        p_Def_Atual: DefAtual,
        nivel: Nivel,
        foco: foco
    }
    

    return StatsUpdated
}