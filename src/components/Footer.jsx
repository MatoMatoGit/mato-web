import React from 'react'

const Footer = ({data}) => {

    return (
        <div className="footer">
            <div className="footer-inner">
                <ul className="footer-content">
                    <li><img src='./images/matomato-white.svg' alt='MatoMato' height="45px"/></li>
                </ul>
                <ul className="footer-content">
                    <li>06-81656062</li>
                    <li>info@mato-mato.nl</li>
                    <li>KVK: 71974008</li>
                </ul>
                <ul className="footer-content horizontal">
                    <li><a href="https://www.facebook.com/MatoMatoNL/"><img src='./images/facebook.svg' alt='MatoMato'/></a></li>
                    <li><a href="https://www.linkedin.com/company/matomato/"><img src='./images/linkedin.svg' alt='MatoMato'/></a></li>
                </ul>
                <ul className="footer-content">
                    <li>Meer en Vaart 416</li>
                    <li>1068LH</li>
                    <li>Amsterdam</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
