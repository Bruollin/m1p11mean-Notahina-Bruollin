const express = require('express');
const taheController = require('../controllers/tache.controller');

const router = express.Router();

// Définir les routes pour gérer les services
router.get('/:id', taheController.findById);
router.get('/', taheController.findAll);
router.get('/disponible', taheController.findTacheDispo);
router.post('/', taheController.ajouterTache);
router.put('/:id', taheController.updateTache);

module.exports = router;
