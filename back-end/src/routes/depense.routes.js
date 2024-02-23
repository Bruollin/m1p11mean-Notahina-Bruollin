const express = require('express');
const depenseController = require('../controllers/depense.controller');

const router = express.Router();


router.get('/:id', depenseController.findById);
router.get('/', depenseController.findAll);
router.get('/disponible', depenseController.findDepenseDispo);
router.post('/', depenseController.ajouterDepense);
router.put('/:id', depenseController.updateDepense);

module.exports = router;
