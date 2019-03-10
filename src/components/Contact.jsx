import React from 'react';

const inputParsers = {
    date(input) {
        const [month, day, year] = input.split('/');
        return `${year}-${month}-${day}`;
    },
    uppercase(input) {
        return input.toUpperCase();
    },
    number(input) {
        return parseFloat(input);
    },
};

class Contact extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);

        for (let name of data.keys()) {
            const input = form.elements[name];
            const parserName = input.dataset.parse;

            if (parserName) {
                const parser = inputParsers[parserName];
                const parsedValue = parser(data.get(name));
                data.set(name, parsedValue);
            }
        }

        fetch('https://api.mailgun.net/v3/sandbox3a80f26dcf834f8c8a9027a836ada35b.mailgun.org', {
            method: 'POST',
            body: data,
            dataType: 'json',
            headers: {"HeaderName": "5e54e9026b92a5a4e5cd4dc6ef41791c-acb0b40c-9e8419ac"},
        });
    }

    render() {
        return (
            <div id="contact" className="contact">
                <div className="row">
                    <div className="contact-info col-12 col-md-6">
                        <h1>Laat je adviseren!</h1>
                        <p>Neem contact met ons op via het formulier, of stuur ons een mail.</p>
                        <a className="mato-button-alt" href='/'>Stuur mail</a>
                        <img src='./images/tomato.svg' alt='tomato'/>
                    </div>

                    <div className="contact-form col-12 col-md-6">
                        <form onSubmit={this.handleSubmit}>

                            <p>Naam</p>
                            <input name="name" type="text"/>

                            <p>Emailadres</p>
                            <input name="email" type="email" required/>

                            <p>Telefoonnummer</p>
                            <input name="telephone" type="tel" required/>

                            <p>Je bericht</p>
                            <input name="message" type="text"/>

                            <input name="terms" type="radio" required/>
                            <span>Accepteer onze voorwaarden</span>

                            <button>Verstuur</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;