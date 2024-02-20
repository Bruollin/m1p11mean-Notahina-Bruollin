const express = require('express');
const statistiqueController = require('../controllers/statistique.controller');

const router = express.Router();

// Définir les routes pour gérer les services
router.get('/:id', statistiqueController.findById);
router.get('/', statistiqueController.findAll);
router.get('/disponible', statistiqueController.findStatistiqueDispo);
router.post('/', statistiqueController.ajouterStatistique);
router.put('/:id', statistiqueController.updateStatistique);

module.exports = router;
