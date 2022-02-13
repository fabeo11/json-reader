const Sequelize = require("sequelize");
const database = require("../services/db");

const Passagem = database.define("passagem", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  placa: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  hora: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  equipamento: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  faixa: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Passagem;
