import React from 'react'

const Footer = ({data}) => {

    return (
        <div className="footer">
            <div className="row">
                <ul className="col-6 col-md-3 footer-content">
                    <li><img src='./images/matomato-white.svg' alt='MatoMato'/></li>
                </ul>
                <ul className="col-6 col-md-3 footer-content">
                    <li><img src='./images/facebook.svg' alt='MatoMato'/></li>
                    <li><img src='./images/linkedin.svg' alt='MatoMato'/></li>
                </ul>
                <ul className="col-6 col-md-3 footer-content">
                    <li>06-81656062</li>
                    <li>info@mato-mato.nl</li>
                    <li>KVK: 71974008</li>
                </ul>
                <ul className="col-6 col-md-3 footer-content">
                    <li>Meer en Vaart 416</li>
                    <li>1068LH</li>
                    <li>Amsterdam</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer