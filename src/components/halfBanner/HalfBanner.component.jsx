import React from 'react';
import './HalfBanner.component.scss';

const HalfBanner = (props) => (
    <div className="full-banner">
        <div className={`half-banner ${props.right ? "half-banner--right" : ""}`}>
            <p>
                {props.info}
            </p>
        </div>
        <div className="half-banner">
            <img src={`${props.image}`} alt=""/>
        </div>
    </div>
)
export default HalfBanner