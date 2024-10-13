import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validation basique
        if (!formData.name || !formData.email || !formData.message) {
            setError('Tous les champs sont obligatoires.');
            return;
        }

        // Envoie des données au formulaire Formspree
        const response = await fetch('https://formspree.io/f/mbljjdej', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire
        } else {
            setError('Une erreur s\'est produite. Veuillez réessayer.');
        }
    };

    return (
        <div className="contact-form">
            {!submitted ? (
                <>
                    <h1>Contactez-moi</h1>
                    <p>
                        Si vous êtes à la recherche d'un développeur web pour vos projets, n'hésitez pas à utiliser le formulaire ci-dessous.               
                        Je m'efforcerai de vous répondre dans les plus brefs délais.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {error && <div className="error">{error}</div>}
                        <button type="submit">Envoyer</button>
                    </form>
                </>
            ) : (
                <div>Merci pour votre message !</div>
            )}
        </div>
    );
};

export default ContactForm;
