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
                        <h1>Slimme plantenverzorging voor de wereld van morgen!</h1>
                        <p>MatoMato ontwikkelt gebruiksvriendelijke elektronica voor het verzorgen van planten. Met onze producten willen we mensen helpen om hun planten goed te verzorgen. Het lukt namelijk niet altijd om kamerplanten of de planten in de tuin optimaal te verzorgen.</p>
                        <p>Door een druk leven kan het gebeuren dat je vergeet om je planten water te geven, of je geeft te weinig of te veel water aan je planten. Om je hierbij te helpen hebben wij de MatoSensor  ontwikkeld. Lees hieronder verder over deze slimme plantensensor.</p>
                        <div className="hero-content-buttons">
                            <a className="mato-button" href='#product-overview-page'>Producten</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
