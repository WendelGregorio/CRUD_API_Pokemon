module.exports = (sequelize, DataTypes) => {
    const Pokemon = sequelize.define("Pokemon", {
        name: DataTypes.STRING,
        p_Atk_Base: DataTypes.INTEGER,
        p_Def_Base: DataTypes.INTEGER,
        p_Atk_Atual: DataTypes.INTEGER,
        p_Def_Atual: DataTypes.INTEGER,
    });

    return Pokemon;
};