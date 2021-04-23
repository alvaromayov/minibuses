import React from 'react';
import './HalfBanner.component.scss';

const HalfBanner = (props) => (
    <div className="full-banner">
        <div className={`half-banner ${props.right ? "half-banner--right" : "half-banner--left"}`}>
            <div className="half-banner__container">
                <h3>{props.title}</h3>
                <p>
                    {props.info}
                </p>
            </div>
        </div>
        <div className="half-banner">
            <img src={`${props.image}`} alt="" />
        </div>
    </div>
)
export default HalfBanner