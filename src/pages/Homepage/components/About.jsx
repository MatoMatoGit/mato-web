import React from 'react'

const About = ({data}) => {

    return (
        <div id="about" className="about">
            <div className="row about-image">
                <h1>Over MatoMato</h1>
                <img src='./images/about.png' alt='about' />
            </div>

            <div className="row">
                <div className="col-12 col-md-8 about-content">
                    <h1>‘Een groep nerds met verstand van techniek en een liefde voor tuintjes’</h1>

                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum.</p>

                    <a className="mato-button" href='#contact'>Inschrijven</a>
                </div>
                <div className="col-12 col-md-4 about-links">
                    <div className="about-links-buttons">
                        <a className="mato-button" href='/'>Ons Verhaal</a>
                        <a className="mato-button" href='/'>Kickstarter</a>
                        <a className="mato-button" href='/'>Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
