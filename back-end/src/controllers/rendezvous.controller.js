const Rdv = require('../models/rendezvous.model');
const Service = require('../models/service.model');
const Utilisateur = require('../models/utilisateur.model');
const employe = require('../models/employe.model');
const MailUtils = require('../utils/mailUtils.util');


class RdvController {
    async statistiqueDureeMoyenneTravailParEmploye(req, res) {
        try {
            const rdv = await Rdv.find({}).populate({
                path: 'employe_id',
                model: 'employe',
                select: '-password'
            }).populate({
                path: 'service_id',
                model: 'Service'
            });
    
            let dureeTotaleParEmploye = {};
            let nombreDeRdvParEmploye = {};
    
            for (const r of rdv) {
                try {
                    const employe = r.employe_id;
                    const employeId = `${employe.firstname} ${employe.lastname}`;
                    const duree = r.service_id.duration || 0;
    
                    dureeTotaleParEmploye[employeId] = (dureeTotaleParEmploye[employeId] || 0) + duree;
                    nombreDeRdvParEmploye[employeId] = (nombreDeRdvParEmploye[employeId] || 0) + 1;
                } catch (error) {
                    console.error(error);
                }
            }
    
            // Calcul de la durée moyenne de travail pour chaque employé
            let dureeMoyenneParEmploye = {};
            Object.keys(dureeTotaleParEmploye).forEach(employeId => {
                const moyenne = dureeTotaleParEmploye[employeId] / nombreDeRdvParEmploye[employeId];
                dureeMoyenneParEmploye[employeId] = parseFloat(moyenne.toFixed(2));
            });
    
            const resultatFinal = {
                dureeMoyenneDeTravailParEmployee: dureeMoyenneParEmploye
            };
    
            res.status(201).send(resultatFinal);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
    
    
    
    async  statChiffreAffairesParJM(req, res) { 
        try {
            const rdvs = await Rdv.find({}).populate({
                path: 'service_id',
                model: 'Service',
                select: 'price' 
            });
    
            const chiffreAffairesParJour = {};
            const chiffreAffairesParMois = {};
            rdvs.forEach(rdv => {
                const date = new Date(rdv.date_rendez_vous);
                const jour = date.toISOString().split('T')[0]; // Récupérer la date au format YYYY-MM-DD
                const mois = date.toISOString().split('-').slice(0, 2).join('-'); // Récupérer la date au format YYYY-MM
                const prixService = rdv.service_id.price;
                chiffreAffairesParJour[jour] = (chiffreAffairesParJour[jour] || 0) + prixService;
                chiffreAffairesParMois[mois] = (chiffreAffairesParMois[mois] || 0) + prixService;
            });
            
            res.status(200).json({ chiffreAffairesParJour, chiffreAffairesParMois });
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
    async  StatReservationJM(req, res) { // statistique de reservation par jours et mois
        try {
            const rdv = await Rdv.find({});
            const reservationsParJour = {};
            const reservationsParMois = {};
    
            // boucle et compter
            rdv.forEach(r => {
                const date = new Date(r.date_rendez_vous);
                const jour = date.toISOString().split('T')[0]; 
                const mois = date.toISOString().split('-').slice(0, 2).join('-'); 
                // Compter les réservations par jour
                reservationsParJour[jour] = (reservationsParJour[jour] || 0) + 1;
    
                // Compter les réservations par mois
                reservationsParMois[mois] = (reservationsParMois[mois] || 0) + 1;
            });
            res.status(200).json({ reservationsParJour, reservationsParMois });
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
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
                model: 'Service',
                select : 'name price commission_pourcentage'
            }).populate({
                path: 'client_id',
                model: 'Utilisateur',
                select: 'firstname'
            }).populate({
                path: 'employe_id',
                model: 'employe',
                select: 'firstname'
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
                model: 'Service',
                select : 'name price'
            }).populate({
                path: 'employe_id',
                model: 'employe',
                select: 'firstname preferences'
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
                model: 'Service',
                select : 'name price'
            }).populate({
                path: 'client_id',
                model: 'Utilisateur',
                select: 'firstname'
            });
    
            res.status(200).send(rdv);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
    async  calculateCommissionParMois(req, res) {
        try {
            const rdvs = await Rdv.find({}).populate({
                path: 'service_id',
                model: 'Service',
                select: 'price commission_pourcentage'
            });
    
            const commissionExpensesByMonth = {};
    
            rdvs.forEach(rdv => {
                const { price, commission_pourcentage } = rdv.service_id;
                const commissionExpense = price * (commission_pourcentage / 100);
    
                const date = new Date(rdv.date_rendez_vous);
                const year = date.getFullYear();
                const month = date.getMonth() + 1; 
    
                const key = `${year}-${month}`;
                
                if (!commissionExpensesByMonth[key]) {
                    commissionExpensesByMonth[key] = 0;
                }
    
                commissionExpensesByMonth[key] += commissionExpense;
            });
    
            res.status(200).send(commissionExpensesByMonth);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
            
   
}
module.exports = new RdvController();
