import React from 'react'

const About = ({data}) => {

    return (
        <div id="about" className="about">
            <div className="row about-image">
                <h1>Over MatoMato</h1>
                <img src='./images/about.jpg' alt='about'/>
            </div>

            <div className="row">
                <div className="col-12 col-md-8 about-content">
                    <h1>‘Een groep nerds met verstand van techniek en een liefde voor tuinieren’</h1>

                    <p>Groene tuinen zijn belangrijk voor de wereld van morgen. Wij maken tuinieren gemakkelijker door
                        onze slimme electronica en irrigatiesysteem.</p>

                    <a className="mato-button" href='#contact'>Contact</a>
                </div>
                <div className="col-12 col-md-4 about-links">
                    <div className="about-links-buttons">
                        <a className="mato-button" href='/'>Facebook</a>
                        <a className="mato-button" href='/'>LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
