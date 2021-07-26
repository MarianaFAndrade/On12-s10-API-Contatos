const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        "title": "To-do API - Reprograma",
        "version": "1.0.0",
        "message": "Bem-vinde a sua API de contatinhos de artistas negros <3"
    })
})

module.exports = router;