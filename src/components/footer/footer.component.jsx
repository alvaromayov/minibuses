import React from 'react';
import "./footer.component.scss"
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => (
    <footer className="footer">
        <div>
            <img className="footer__image" src="https://minibusesronda.com/wp-content/uploads/2021/04/final-logo.png" alt="" />
        </div>
        <div>
            <p className="footer__contact">
                <a href="tel:+34609286110">
                    <PhoneIcon className="footer__icon" />
                    Telefono: <span className="footer__number">+34 609 286 110</span>
                 </a>
            </p>
            <p className="footer__contact">
                <a href="tel:+34659455516" >
                    <PhoneIcon className="footer__icon" />
                    Telefono: <span className="footer__number">+34 659 455 516</span>
                </a>
            </p>
            <p className="footer__contact">
                <a href="mailto: taxibusronda@gmail.com">
                    <MailIcon className="footer__icon" />
                    Email: <span className="footer__number">taxibusronda@gmail.com</span>
                </a>
            </p>
        </div>
    </footer>
)

export default Footer