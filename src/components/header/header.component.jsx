import React from 'react';
import { Link } from 'react-router-dom';
import TemporaryDrawer from '../drawer/drawer.component';
import logo from '../../assets/images/vito.png';


import './header.component.scss';

const Header = () => (
    <div className="header">
        <div className="container">
            <div className="header__mobile">
                <TemporaryDrawer />
            </div>
                <Link to="/" >
                    <img className="image" src={logo} alt="" />
                </Link>
            <div className="links">
                <Link to="/" className="link">Inicio</Link>
                <Link to="/contactanos" className="link">Contactanos</Link>
                <Link to="/" className="link">Login</Link>
            </div>
        </div>
    </div>
)

export default Header