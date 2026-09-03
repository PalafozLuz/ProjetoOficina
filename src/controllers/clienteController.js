const Cliente = require('../models/Cliente');
const bcrypt = require('bcryptjs');

const cadastrarCliente = async (req, res) => {
    try {
        const { nome, email, senha, telefone, modeloVeiculo, placa, problemaVeiculo } = req.body;

        const clienteExistente = await Cliente.findOne({
            where: { email }
        });

        if (clienteExistente) {
            return res.status(400).json({
                mensagem: 'Já existe um cliente com este e-mail.'
            });
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const cliente = await Cliente.create({
            nome,
            email,
            senha: senhaCriptografada,
            telefone,
            modeloVeiculo,
            placa,
            problemaVeiculo
        });

        res.status(201).json({
            mensagem: 'Cliente cadastrado com sucesso!',
            cliente: {
                id: cliente.id,
                nome: cliente.nome,
                email: cliente.email,
                telefone: cliente.telefone,
                modeloVeiculo: cliente.modeloVeiculo,
                placa: cliente.placa,
                problemaVeiculo: cliente.problemaVeiculo
            }
        });

    } catch (error) {
        res.status(500).json({
            mensagem: 'Erro ao cadastrar cliente',
            erro: error.message
        });
    }
};

module.exports = {
    cadastrarCliente
};