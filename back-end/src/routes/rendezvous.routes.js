const express = require('express');
const rdvController = require('../controllers/rendezvous.controller');

const router = express.Router();

// Définir les routes pour gérer les services
router.get('/:id', rdvController.findById);
router.get('/', rdvController.findAll);
router.get('/disponible', rdvController.findRdvDispo);
router.post('/', rdvController.ajouterRdv);
router.put('/:id', rdvController.updateRdv);

module.exports = router;
