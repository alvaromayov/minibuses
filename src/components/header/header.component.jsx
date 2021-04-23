import React from 'react';
import { Link } from 'react-router-dom';


import './header.component.scss';

const Header = () => (
    <div className="header">
        <div className="container">
            <div>
                <Link to="/" >
                    <img className="image" src="https://www.global-rent-a-car.com/fileadmin/_processed_/b/9/csm_PVMD_Mercedes_Vito_2019_black_right_faf191d992.png" alt="" />
                </Link>
            </div>
            <div className="links">
                <Link to="/" className="link">Inicio</Link>
                <Link to="/contactanos" className="link">Contactanos</Link>
                <Link to="/" className="link">Login</Link>
            </div>
        </div>
    </div>
)

export default Header