const express = require('express');
const routes  = express.Router();
const ProductController = require('./controllers/ProductController');

// ROTA RAIZ /
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

// Exporta o routes.js para ser utilizado dentro do server.js
module.exports = routes;