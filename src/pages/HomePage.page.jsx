import React from "react";
import Hero from '../components/hero/hero.component';
import WhatWeDo from "../components/whatWeDo/WhatWeDo.component";

const HomePage = () => (
    <div>
        <Hero 
        title="Minibuses Ronda" 
        subtitle="Servicios profesionales de transporte de personas"
        description="Nuestro equipo de profesionales asegura un trato personalizado y el mejor servicio de desplazamientos, realizando rutas y circuitos turísticos. Trabajamos con agencias de viajes de turismo exclusivo con vehículos de marca Mercedes y gama alta, ofreciendo un servicio público sin distintivo de taxi ni emplazamiento publicitario en puertas, otorgando al servio de mayor elegancia y profesionalidad." 
        />
        <WhatWeDo />
    </div>
)

export default HomePage