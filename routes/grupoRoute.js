const express = require('express');
const router = express.Router();
const controller = require('../controllers/grupoController')

router.get('/', controller.getGrupos);

module.exports = router;