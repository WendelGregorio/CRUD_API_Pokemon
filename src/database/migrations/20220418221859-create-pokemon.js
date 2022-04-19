'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('pokemons', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
        
      },
      p_Atk_Base: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      p_Def_Base: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      p_Atk_Atual: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      p_Def_Atual: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nivel: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      foco: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('pokemons');
  }
};
