const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');
const autenticar = require('../middlewares/authMiddleware');

router.post('/cadastro', clienteController.cadastrarCliente);

router.get('/perfil', autenticar, async (req, res) => {
    res.json({
        mensagem: 'Você acessou uma rota protegida!',
        cliente: req.cliente
    });
});

module.exports = router;