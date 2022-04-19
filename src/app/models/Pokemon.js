module.exports = (sequelize, DataTypes) => {
    const Pokemon = sequelize.define("pokemons", {
        name: DataTypes.STRING,
        p_Atk_Base: DataTypes.INTEGER,
        p_Def_Base: DataTypes.INTEGER,
        p_Atk_Atual: DataTypes.INTEGER,
        p_Def_Atual: DataTypes.INTEGER,
        nivel: DataTypes.INTEGER,
        foco: DataTypes.STRING
    });

    return Pokemon;
};