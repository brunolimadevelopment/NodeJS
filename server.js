const express    = require('express');
const cors       = require('cors');
const mongoose   = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
// https://www.npmjs.com/package/express
const app = express();

// Permite enviar dados com o POST para aplicação no formato de JSON
app.use(express.json());

// Se não passar parametro dentro de cors() a API será liberada o acesso para todos os dominios
// https://www.npmjs.com/package/cors
app.use(cors());

// Iniciando o DB - reference https://www.npmjs.com/package/mongoose
mongoose.connect('mongodb://localhost:27017/node-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Apos a conexão insere o require da model, pois para funcionar ela precisa que ja esteja conectado com o banco
requireDir('./src/models');

// ROTAS
// O use é uma especie de coringo, ele recebe todo tipo de requisição ( get,post,delete, etc)
app.use('/api', require('./src/routes'));
app.listen(3001);