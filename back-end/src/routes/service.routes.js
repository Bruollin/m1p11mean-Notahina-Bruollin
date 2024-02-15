const express = require('express');
const serviceController = require('../controllers/service.controller');

const router = express.Router();

// Définir les routes pour gérer les services
router.get('/:id', serviceController.findById);
router.get('/', serviceController.findAll);
router.get('/disponible', serviceController.findServiceDispo);
router.post('/', serviceController.ajouterService);
router.put('/:id', serviceController.updateService);

module.exports = router;
