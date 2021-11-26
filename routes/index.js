const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Checkout Api",
        version: "v1.0.0"
    });
});

module.exports = router;