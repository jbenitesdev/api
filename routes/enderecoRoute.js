const express = require('express');
const router = express.Router();
const controller = require('../controllers/clienteEnderecoController')

router.get('/', controller.getEndereco);

module.exports = router;