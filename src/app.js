const express = require('express');
const dotenv = require('dotenv');

const sequelize = require('./config/database');

const clienteRoutes = require('./routes/clienteRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/clientes', clienteRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.json({
        mensagem: 'API da Oficina Mecânica funcionando!'
    });
});

const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(() => {
        console.log('Banco de dados conectado.');

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco:', error);
    });