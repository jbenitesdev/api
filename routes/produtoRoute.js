const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtoController')

router.get('/', controller.getProdutos);

module.exports = router;