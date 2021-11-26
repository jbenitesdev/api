const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidosProdutosController')

router.get('/', controller.getPedidosProdutos);

module.exports = router;