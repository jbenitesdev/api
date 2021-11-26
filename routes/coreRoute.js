const express = require('express');
const router = express.Router();
const controller = require('../controllers/coreController')

router.get('/estabelecimento', controller.getEstabelecimento);

module.exports = router;