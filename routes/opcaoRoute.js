const express = require('express');
const router = express.Router();
const controller = require('../controllers/opcaoController')

router.get('/', controller.getOpcao);

module.exports = router;