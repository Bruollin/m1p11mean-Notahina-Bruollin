const express = require('express');
const employeController = require('../controllers/employe.controller');

const router = express.Router();


router.get('/:id', employeController.findById);
router.get('/', employeController.findAll);
router.get('/disponible', employeController.findEmployeDispo);
router.post('/', employeController.ajouterEmploye);
router.put('/:id', employeController.updateEmploye);

module.exports = router;
