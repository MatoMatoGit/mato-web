import React from 'react'

const About = ({data}) => {

    return (
        <div id="about" className="about">
            <div className="row about-image">
                <img src='./images/about.jpg' alt='about'/>
            </div>

            <div className="row">
                <div className="col-12 col-md-8 about-content">
                    <h1>Over ons</h1>

                    <p>MatoMato bouwt aan een klimaatbestendige toekomst met aandacht voor mens
                        en natuur. Dit doen we door gebruiksvriendelijke electronica te ontwikkelen die je
                        helpt bij het tuinieren. Hierdoor heb je inzicht in de behoeften van je planten en
                        geef je ze op het juiste moment water.</p>
                    <p>We willen tuinieren leuker en makkelijker maken met onze electronica. In de
                        toekomst zullen we steeds meer producten ontwikkelen om je tuin slim te maken.
                        Bouw jij met ons mee aan de wereld van morgen?</p>

                    <a className="mato-button" href='#contact'>Contact</a>
                </div>
                <div className="col-12 col-md-4 about-links">
                    <div className="about-links-buttons">
                        <a className="mato-button" href="https://www.facebook.com/TheRealMatoMato/">Facebook</a>
                        <a className="mato-button" href="https://www.linkedin.com/company/matomato/">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
