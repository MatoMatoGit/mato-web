import React from 'react'

const About = ({data}) => {

    return (
        <div id="about" className="about">
            <div className="row about-image">
                <img src='./images/about.jpg' alt='about'/>
            </div>

            <div className="row">
                <div className="col-12 about-title">
                    <h1>Over ons</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-8 about-content">
                    <p>MatoMato bouwt aan een klimaatbestendige toekomst met aandacht voor mens
                        en natuur. We ontwikkelen gebruiksvriendelijke elektronica die je
                        helpen bij het tuinieren. Hierdoor heb je inzicht in de behoeften van je planten en
                        geef je ze op het juiste moment water.</p>
                    <p>Met onze elektronica wordt tuinieren leuker en makkelijker! In de
                        toekomst gaan we meer producten ontwikkelen om je tuin slim te maken.
                        Bouw jij met ons mee aan de wereld van morgen?</p>

                    <a className="mato-button" href='#product-overview-page'>Onze producten</a>
                </div>

                <div className="col-12 col-md-4 about-links">
                    <div className="about-links-buttons">
                        <a className="mato-button" href="https://www.facebook.com/MatoMatoNL/">Facebook</a>
                        <a className="mato-button" href="https://www.linkedin.com/company/matomato/">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
