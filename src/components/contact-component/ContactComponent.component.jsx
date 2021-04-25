import React from "react";
import ContactForm from '../contact-form/ContactForm.component';

import "./ContactComponent.component.scss";

const ContactComponent = () => (
    <div className="contact">
        <div className="container">
            <div className="content">
                <div className="content--half">
                    <h1>Contactanos</h1>
                    <p>Te ha quedado alguna duda?</p>
                    <p>Mandanos un mensaje y un miembro de nuestro maravilloso equipo se pondra en contacto contigo. </p>
                </div>
                <div className="content--half">
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
)

export default ContactComponent