const express = require('express');
const router = express.Router();
const controller = require('../controllers/menuController')

router.get('/', controller.get);
router.get('/list', controller.getMenu);

module.exports = router;