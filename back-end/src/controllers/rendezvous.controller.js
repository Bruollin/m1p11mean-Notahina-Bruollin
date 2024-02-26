const Rdv = require('../models/rendezvous.model');
const Service = require('../models/service.model');
const Utilisateur = require('../models/utilisateur.model');
const employe = require('../models/employe.model');
const MailUtils = require('../utils/mailUtils.util');
async function statistiqueDureeMoyenneTravailParEmploye() {
    try {
        const rdv = await Rdv.find({}).populate({
            path: 'employe_id',
            model: 'employe',
            select: '-password'
        }).populate({
            path: 'service_id',
            model: 'Service'
        });

        // Dictionnaire pour stocker la durée totale de travail par employé
        let dureeTotaleParEmploye = {};
        // Dictionnaire pour stocker le nombre de rendez-vous par employé
        let nombreDeRdvParEmploye = {};

        // Calculer la durée totale de travail et le nombre de rendez-vous pour chaque employé
        rdv.forEach(r => {
            const employeId = r.employe_id; // Convertissez l'ID en chaîne pour assurer la cohérence
            const firstname = employe.firstname;
            const duree = r.service_id.duration || 0; // Durée du service (en heures)

            dureeTotaleParEmploye[employeId] = (dureeTotaleParEmploye[employeId] || 0) + duree;
            nombreDeRdvParEmploye[employeId] = (nombreDeRdvParEmploye[employeId] || 0) + 1;
        });

        // Calculer la durée moyenne de travail pour chaque employé
        let dureeMoyenneParEmploye = {};
        Object.keys(dureeTotaleParEmploye).forEach(employeId => {
            dureeMoyenneParEmploye[employeId] = dureeTotaleParEmploye[employeId] / nombreDeRdvParEmploye[employeId];
        });

        return dureeMoyenneParEmploye;
    } catch (err) {
        throw new Error(err.message);
    }
}
statistiqueDureeMoyenneTravailParEmploye()
    .then(dureeMoyenneParEmploye => {
        console.log("Durée moyenne de travail par employé :");
        console.log(dureeMoyenneParEmploye);
    })
    .catch(err => {
        console.error("Erreur :", err.message);
    });

class RdvController {
    async sendReminderEmail(req, res) {
        const subject = 'Rappel de rendez-vous';
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
        const text = `<p class="reminder-text">Ceci est un rappel de votre rendez-vous prévu pour le<strong>${formattedDate}</strong>.</p>`;
        
        const mailUtilsInstance = new MailUtils();
        try {
            await mailUtilsInstance.sendReminderEmail('noutahiana01@gmail.com', subject, text);
            res.status(201).send(subject+""+text);
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
            res.status(500).send({ message: err.message });
        }
    }
    
    async ajouterRdv(req, res) {
        try {
            const rdv = new Rdv(req.body);
            await rdv.save();
            res.status(201).send(rdv);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async updateRdv(req, res) {
        try {
            const rdv = await Rdv.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).send(rdv);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findById(req, res) {
        try {
            const rdv = await Rdv.findById(req.params.id);
            res.status(200).send(rdv);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const rdv = await Rdv.find({}).populate({
                path: 'service_id',
                model: 'Service'
            }).populate({
                path: 'client_id',
                model: 'Utilisateur',
                select: '-password'
            }).populate({
                path: 'employe_id',
                model: 'employe',
                select: '-password'
            });
            res.status(200).send(rdv);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }


    async findRdvDispo(req, res) {
        try {
            const rdv = await Rdv.find({ etat: true });
            res.status(200).send(rdv);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
    async  findAllRdvWithClientId(req, res) {
        try {
            
            const client_id = req.params.client_id;
            const rdv = await Rdv.find({ client_id }).populate({
                path: 'service_id',
                model: 'Service'
            }).populate({
                path: 'client_id',
                model: 'Utilisateur',
                select: '-password'
            }).populate({
                path: 'employee_id',
                model: 'employe',
                select: '-password'
            });
            res.status(200).send(rdv);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
    async  findRdvByEmployeId(req, res) {
        try {
            const { employe_id } = req.params;

            const rdv = await Rdv.find({ employe_id }).populate({
                path: 'service_id',
                model: 'Service'
            }).populate({
                path: 'client_id',
                model: 'Utilisateur',
                select: '-password'
            }).populate({
                path: 'employe_id',
                model: 'employe',
                select: '-password'
            });
    
            res.status(200).send(rdv);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
    
    
   
}
module.exports = new RdvController();
