const express = require('express');
const router = express.Router();
const controller = require('../controllers/adicionalController')

router.get('/', controller.getAdicional);

module.exports = router;