import React from 'react'

const Hero = ({data}) => {

    return (
        <div id="hero" className="hero">
            <div className="row hero-content">
                <div className="col-12 col-md-6 hero-image">
                    <img src='./images/garden.png' alt='MatoMato'/>
                </div>
                <div className="col-12 col-md-6 hero-container">
                    <div className="hero-text">
                        <h1><span>MatoMato</span> pompt leven in jouw tuin</h1>
                        <p>Met MatoMato wordt tuinieren makkelijk en leuk. Door ons slimme watersysteem krijg je
                            beter inzicht in wat je plantjes nodig hebben. Dit zorgt voor minder waterverbruik en is dus
                            beter voor het milieu. Ons doel is om met deze techniek alle tuintjes in
                            Nederland te veroveren en een stukje groener te maken.</p>
                        <div className="hero-content-buttons">
                            <a className="mato-button" href='#contact'>Contact</a>
                            <a className="mato-button" href='#product'>Onze producten</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
