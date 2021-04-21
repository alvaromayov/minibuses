import React from "react";
import Button from "@material-ui/core/Button";

import "./ContactForm.component.scss";
const ContactForm = () => (
    <div className="contact">
        <div className="container">
            <div className="content">
                <div className="content--half">
                    <h1>Contactanos</h1>
                    <p>Te ha quedado alguna duda?</p>
                    <p>Mandanos un mensaje y alguien de nuestro maravilloso equipo se pondra en contacto contigo. </p>
                </div>
                <div className="content--half">
                    <form className="contact-form">
                        <label>Nombre</label>
                        <input type="text" />
                        <label>Apellidos</label>
                        <input type="text" />
                        <label>Escribe aqui tu consulta</label>
                        <input type="text" />
                        <Button variant="contained" color="primary">
                            Enviar solicitud
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default ContactForm