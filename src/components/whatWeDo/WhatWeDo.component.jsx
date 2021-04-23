import React from 'react';
import HalfBanner from '../half-banner/HalfBanner.component';

import './WhatWeDo.component.scss';

const WhatWeDo = () => (
    <div className="what-we-do">
        <h2>Nuestros servicios</h2>
        <HalfBanner title="Transporte privado" info="Disponemos de transporte privado para viajes de largo y corto alcance." image="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" right="true"/>
        <HalfBanner title="titulo random" info="placeholder" image="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80"/>
    </div >
)
export default WhatWeDo