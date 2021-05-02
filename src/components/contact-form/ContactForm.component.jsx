import React from 'react';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import './ContactForm.component.scss';


class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            lastName: '',
            email: '',
            message: '',
            formFilled: false
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state.displayName)
        console.log(this.state.lastName)
        this.setState({
            formFilled: true
        })
    }

    render() {
        if (!this.state.formFilled) {
            return (
                <form className="contact-form">
                    <label>Nombre</label>
                    <input name="displayName" value={this.displayName} onChange={this.handleChange} type="text" required />
                    <label>Apellidos</label>
                    <input name="lastName" value={this.lastName} onChange={this.handleChange} type="text" required />
                    <label>Correo electronico</label>
                    <input name="email" value={this.email} onChange={this.handleChange} type="email" required />
                    <label>Escribe aqui tu consulta</label>
                    <input name="message" value={this.message} onChange={this.handleChange} type="text" required />
                    <Button onClick={this.submitForm} variant="contained" color="primary">
                        Enviar solicitud
                </Button>
                </form>
            )
        } else {
            return (
                <div className="success-message">
                    <h1>Mensaje recibido</h1>
                    <p>Tu mensaje ha sido entregado correctamente a nuestro equipo.</p>
                    <p>Volver a <Link to="/" className="">inicio</Link></p>
                </div>
            )
        }
    }
}

export default ContactForm