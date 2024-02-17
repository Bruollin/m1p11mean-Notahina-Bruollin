const express = require('express');
const produitController = require('../controllers/produit.controller');

const router = express.Router();

router.get('/:id', produitController.findById);
router.get('/', produitController.findAll);
router.get('/disponible', produitController.findProduitDispo);
router.post('/', produitController.ajouterProduit);
router.put('/:id', produitController.updateProduit);

module.exports = router;
