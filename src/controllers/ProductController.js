// ESSE ARQUIVO É RESPONSAVEL PELAS OPERAÇÕES DAS MODELS, POR EXEMPLO
// LISTAGEM, CRIAÇÃO, ATUALIZAÇÃO, REMOÇÃO ETC;

const mongoose = require('mongoose'); // inicia o mongoose
const Product  = mongoose.model('Product'); // busca a model product na pasta models/Product.js

// O uso do module.exports faz com que possamos utilizar o metodo index() em qualquer arquivo.
// nesse caso utilizaremos o metodo index() no arquivo routes.js 
module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query
        const products = await Product.paginate({}, { page, limit: 10}); // o uso do await busca primeiro os registro no BD para depois fazer o return res.json(products)


        return res.json(products) // retorna a resposta no formato json
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    // req - contém todos os dados da requisição inclusive o body
    // no body está todos os dados.
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        // { new: true } faz com que o mongoose retorne o req.body atualizado.
        // caso n tenha { new: true } o req.body não retorna atualizado.
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        // send() retorna apenas uma resposta de sucesso, sem nenhum conteudo
        return res.send();
    }
};

