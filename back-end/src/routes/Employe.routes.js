const express = require('express');
const employeController = require('../controllers/Employe.controller');

const router = express.Router();


router.get('/:id', employeController.findById);
router.get('/', employeController.findAll);
router.get('/disponible', employeController.findEmployeDispo);
router.get('/byService/:service_id', employeController.findByServiceId);
router.post('/', employeController.ajouterEmploye);
router.put('/:id', employeController.updateEmploye);
router.post('/login', employeController.login);

module.exports = router;
