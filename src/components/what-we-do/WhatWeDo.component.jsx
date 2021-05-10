import React from 'react';
import HalfBanner from '../half-banner/HalfBanner.component';
import tajo from '../../assets/images/ronda-aerea.jpg';
import airport from '../../assets/images/airport.jpg';
import boda from '../../assets/images/wedding-bus.png';

import './WhatWeDo.component.scss';

const WhatWeDo = () => (
    <div className="what-we-do">
        <h2>Nuestros servicios</h2>
        <HalfBanner title="Transporte privado" info="Disponemos de transporte privado para viajes de largo y corto alcance." image="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" right="true"/>
        <HalfBanner title="Excursiones" info="Proponemos todo tipo de actividades ludicas y culturales y proporcionamos desde transporte a reserva de actividades y guias turisticos." image={tajo} />
        <HalfBanner title="Traslados a aeropuertos" info="Reserva un traslado a aeropuerto y nos aseguraremos de que empieces tu viaje libre de preocupaciones." image={airport} right/>
        <HalfBanner title="Eventos" info="Entendemos el nivel de estres que puedes llegar a soportar en eventos y ceremonias, olvidate del transporte de invitados y dejalo en nuestras manos." image={boda} />
    </div >
)
export default WhatWeDo