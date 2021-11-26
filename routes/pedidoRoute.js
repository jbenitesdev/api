const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidoController')

router.get('/', controller.getPedido);

module.exports = router;