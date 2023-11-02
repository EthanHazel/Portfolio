import React, { useState } from 'react';
import './form.css';

export default function Form(props) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formValid, setFormValid] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const { name, email, message } = formData;

        const payload = {
            content: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        const webhookUrl = 'https://discord.com/api/webhooks/1169435861021098026/bNCmn2erCDvH91rKk-EjS6_M0b57R7C81f9qDVcSfhTX1dYrj5B6n07B0BqGlaeVTYY-';

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(response => {
                if (response.ok) {
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                    setFormValid(false);
                    alert('Message sent successfully!');
                } else {
                    alert('Error sending message');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error sending message');
            });
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        const updatedFormData = {
            ...formData,
            [name]: value,
        };

        // Check the validity of the updated form data
        const isFormValid = updatedFormData.name && updatedFormData.email && updatedFormData.message;

        setFormData(updatedFormData);
        setFormValid(isFormValid);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name / Company"
                value={formData.name}
                maxLength={50}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="email"
                placeholder="E-Mail"
                value={formData.email}
                maxLength={50}
                onChange={handleInputChange}
            />
            <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                maxLength={2500}
                onChange={handleInputChange}
            />
            <button type="submit" className="button red" disabled={!formValid}>
                Send
            </button>
        </form>
    );
}
