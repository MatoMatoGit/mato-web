import React from 'react'

const Hero = ({data}) => {

    return (
        <div id="hero" className="hero">
            <div className="row hero-content">
                <div className="col-12 col-md-6 hero-image">
                    <img src='./images/hero.svg' alt='MatoMato'/>
                </div>
                <div className="col-12 col-md-6 hero-container">
                    <div className="hero-text">
                        <h1>MatoMato maakt uw tuin slim</h1>
                        <p>Met MatoMato krijgt u grip op uw tuin. Door het integreren van dit slimme systeem in uw tuin
                            bespaart u water en krijgt u een gezondere tuin.</p>
                        <div className="hero-content-buttons">
                            <a className="mato-button" href='#contact'>Inschrijven</a>
                            <a className="mato-button" href='#about'>Over ons</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
