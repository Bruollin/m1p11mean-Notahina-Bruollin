const express = require('express');
const produitServiceController = require('../controllers/produitservice.controller');

const router = express.Router();

router.get('/:id', produitServiceController.findById);
router.get('/', produitServiceController.findAll);
router.get('/disponible', produitServiceController.findProduitServiceDispo);
router.post('/', produitServiceController.ajouterProduitService);
router.put('/:id', produitServiceController.updateProduitService);

module.exports = router;
