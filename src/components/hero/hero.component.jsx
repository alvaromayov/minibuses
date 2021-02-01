import React from 'react';
import zenscroll from 'zenscroll';

import { ReactComponent as Arrow } from '../../assets/icons/down-arrow.svg';

import './hero.component.scss';

const scroll = () => {
    zenscroll.setup(null, 60);
    const nextSection = document.querySelector('#flota');
    zenscroll.to(nextSection);
}

const Hero = ({ title, description, subtitle }) => (
    <div className="hero">
        <div className="container">
            <h1 className="title">{title}</h1>
            <p className="subtitle">{subtitle}</p>
            <p className="body">{description}</p>
            <div className="hero__scroll-link" onClick={scroll}>
                <span>Ver mas <Arrow className="hero__down-icon hero__down-icon--white" /></span>
            </div>
        </div>
    </div>
)

export default Hero