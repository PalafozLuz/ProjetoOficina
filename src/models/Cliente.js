const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },

    modeloVeiculo: {
        type: DataTypes.STRING,
        allowNull: false
    },

    placa: {
        type: DataTypes.STRING,
        allowNull: false
    },

    problemaVeiculo: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Cliente;