const nodemailer = require('nodemailer');
require('dotenv').config();

class MailUtils {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
    }

    async sendReminderEmail(clientEmail, subject, text) {
        try {
            const fullHtmlContent = text;
            const mailOptions = {
                from: process.env.EMAIL_USERNAME,
                to: clientEmail,
                subject: subject,
                html: fullHtmlContent,
            };

            // Envoyer l'e-mail
            await this.transporter.sendMail(mailOptions);
            console.log(`E-mail envoyé à ${clientEmail}`);
        } catch (error) {
            console.error(`Erreur lors de l'envoi de l'e-mail : ${error.message}`);
            throw error;
        }
    }
}

module.exports = MailUtils;
