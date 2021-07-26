const controller = require('../controllers/toDoControllers');
const express = require('express');
const router = express.Router();

router.get('/', controller.getAll)
router.get('/nomes', controller.getByName)
router.get('/:id', controller.getById)

router.post('/cadastrar', controller.novoContatinho)

router.put('/substituir:id', controller.substituirContatinho)

router.patch("/substituir/nome:id", controller.substituirNomeContatinho);

router.delete("/deletar:id", controller.deletarContato)

module.exports = router;