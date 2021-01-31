import React from 'react';
import zenscroll from 'zenscroll';

import { ReactComponent as Arrow } from '../../assets/icons/down-arrow.svg';

import './hero.component.scss';

const scroll = () => {
    zenscroll.setup(null, 60);
    const nextSection = document.querySelector('#flota');
    zenscroll.to(nextSection);
}

const Hero = ({ title, description }) => (
    <div className="hero">
        <div className="container">
            <h1 className="title">{title}</h1>
            <p>{description}</p>
            <div className="hero__scroll-link" onClick={scroll}>
                <span>Ver mas <Arrow className="hero__down-icon hero__down-icon--white" /></span>
            </div>
        </div>
    </div>
)

export default Hero