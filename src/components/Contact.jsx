import React from "react";
import axios from "axios";

class Contact extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const message = document.getElementById("message").value;

    axios({
      method: "POST",
      url: "https://mail.evinst.nl:3000/matomato",
      data: {
        name: name,
        email: email,
        telephone: telephone,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Bedankt voor je interesse in MatoMato.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert(
          "Het versturen van het bericht is helaas mislukt, probeer het op een later moment nog eens."
        );
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <div id="contact" className="contact">
        <div className="contact-title">
          <h2>Contact</h2>
        </div>

        <div className="contact-container">
          {/* <div className="contact-form">
                        <h4>Stuur ons een vraag</h4>
                        <p>Ook voor de aankoop van een MatoSensor kunt u het contactformulier invullen, of een e-mail sturen.</p>

                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <p>Naam*</p>
                            <input id="name" name="name" type="text" required/>

                            <p>Emailadres*</p>
                            <input id="email" name="email" type="email" required/>

                            <p>Telefoonnummer</p>
                            <input id="telephone" name="telephone" type="tel"/>

                            <p>Uw bericht</p>
                            <textarea id="message" name="message" type="text"/>

                            <input name="terms" type="checkbox" required/>
                            <a href="./voorwaarden.pdf"><span>Accepteer onze voorwaarden</span></a>

                            <button className="mato-button">Verstuur</button>
                        </form>
                    </div> */}

          <div className="contact-info">
            <h4>Wij adviseren je graag!</h4>
            <p>
              Neem gerust contact met ons op via het contactformulier, of stuur
              ons een e-mail!
            </p>
            <a className="mato-button-alt" href="mailto:info@mato-mato.nl">
              Stuur e-mail
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
