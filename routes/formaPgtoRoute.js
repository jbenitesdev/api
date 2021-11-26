const express = require('express');
const router = express.Router();
const controller = require('../controllers/formaPgtoController')

router.get('/', controller.getFormPgto);

module.exports = router;