import React from 'react';
import Button from "@material-ui/core/Button";


class ContactForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
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
        )
    }
}

export default ContactForm