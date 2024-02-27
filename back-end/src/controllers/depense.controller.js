const Depense = require('../models/depense.model');

class DepenseController {
    async ajouterDepense(req, res) {
        try {
            const depense = new Depense(req.body);
            await depense.save();
            res.status(201).send(depense);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async updateDepense(req, res) {
        try {
            const depense = await Depense.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).send(depense);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findById(req, res) {
        try {
            const depense = await Depense.findById(req.params.id);
            res.status(200).send(depense);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const depense = await Depense.find({});
            res.status(200).send(depense);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findDepenseDispo(req, res) {
        try {
            const depense = await Depense.find({ etat: true });
            res.status(200).send(depense);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
    async  calculerDepensesParMois(req, res) {
        try {
            const depensesParMois = await Depense.aggregate([
                {
                    $group: {
                        _id: { $month: "$date_insertion" }, // Grouper par mois
                        totalDepense: { $sum: { $toDouble: "$prix" } } // Calculer le total des dépenses
                    }
                },
                {
                    $sort: { "_id": 1 } // Trier les résultats par mois
                }
            ]);
    
            // Transformer les numéros de mois en mois en lettres
            const monthNames = {
                1: "Janvier",
                2: "Février",
                3: "Mars",
                4: "Avril",
                5: "Mai",
                6: "Juin",
                7: "Juillet",
                8: "Août",
                9: "Septembre",
                10: "Octobre",
                11: "Novembre",
                12: "Décembre"
            };
            const moisEnLettres = depensesParMois.map(item => {
                return {
                    mois: monthNames[item._id],
                    totalDepense: item.totalDepense
                };
            });
    
            console.log(moisEnLettres);
            res.status(200).send(moisEnLettres);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    } 
}

    
module.exports = new DepenseController();
