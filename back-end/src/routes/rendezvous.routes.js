const express = require('express');
const rdvController = require('../controllers/rendezvous.controller');

const router = express.Router();

// Définir les routes pour gérer les services
router.get('/:id', rdvController.findById);
router.get('/', rdvController.findAll);
router.get('/disponible', rdvController.findRdvDispo);
router.post('/client/:client_id', rdvController.findAllRdvWithClientId);
router.post('/employe/:employe_id', rdvController.findRdvByEmployeId);

router.post('/statDureeMoyenne', rdvController.statistiqueDureeMoyenneTravailParEmploye);
router.post('/statReservation', rdvController.StatReservationJM);
router.post('/', rdvController.ajouterRdv);
router.put('/:id', rdvController.updateRdv);
router.post('/send-reminder-email', rdvController.sendReminderEmail);

module.exports = router;
