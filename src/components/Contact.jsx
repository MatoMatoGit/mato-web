import React from 'react';
import axios from 'axios';

class Contact extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const telephone = document.getElementById('telephone').value;
        const message = document.getElementById('message').value;

        axios({
            method: "POST",
            url: "http://localhost:3002/mail/send",
            data: {
                name: name,
                email: email,
                telephone: telephone,
                message: message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Bedankt voor uw bericht.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Het versturen van het bericht is helaas mislukt, probeer het op een later moment nog eens.")
            }
        })
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <div id="contact" className="contact">
                <div className="contact-title">
                    <h2>Contact</h2>
                </div>

                <div className="contact-container">
                    <div className="contact-info">
                        <h4>Laat je adviseren!</h4>
                        <p>Neem contact met ons op via het formulier, of stuur ons een mail.</p>
                        <a className="mato-button-alt" href='mailto:info@info'>Stuur mail</a>
                        <img src='./images/tomato.svg' alt='tomato'/>
                    </div>

                    <div className="contact-form">
                        <h4>Stuur me een vraag</h4>
                        <p>Vul het formulier in en ik beantwoord
                            je vraag zo snel mogelijk.</p>

                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <p>Naam</p>
                            <input id="name" name="name" type="text"/>

                            <p>Emailadres*</p>
                            <input id="email" name="email" type="email" required/>

                            <p>Telefoonnummer*</p>
                            <input id="telephone" name="telephone" type="tel" required/>

                            <p>Je bericht</p>
                            <textarea id="message" name="message" type="text"/>

                            <input name="terms" type="checkbox" required/>
                            <a href="./voorwaarden.pdf"><span>Accepteer onze voorwaarden</span></a>

                            <button className="mato-button">Verstuur</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;