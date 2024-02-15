const express = require('express');
const managerController = require('../controllers/manager.controller');

const router = express.Router();

// Définir les routes pour gérer les services
router.get('/:id', managerController.findById);
router.get('/', managerController.findAll);
router.get('/disponible', managerController.findManagerDispo);
router.post('/', managerController.ajouterManager);
router.put('/:id', managerController.updateManager);

module.exports = router;
