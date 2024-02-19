const express = require('express');
const utilisateurController = require('../controllers/utilisateur.controller');

const router = express.Router();

// Définir les routes pour gérer les services
router.get('/:id', utilisateurController.findById);
router.get('/', utilisateurController.findAll);
router.get('/disponible', utilisateurController.findUtilisateurDispo);
router.post('/ajout', utilisateurController.ajouterUtilisateur);
router.put('/:id', utilisateurController.updateUtilisateur);
router.post('/login', utilisateurController.login);

module.exports = router;
