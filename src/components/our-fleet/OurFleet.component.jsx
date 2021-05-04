import React from 'react';
import ImageCard from '../image-card/ImageCard.component';
import './OurFleet.component.scss';
import skoda from '../../assets/images/skoda-super-b.png';
import vito from '../../assets/images/vito.png';

const OurFleet = () => (
    <div className="our-fleet">
        <ImageCard 
        title="Vito" 
        benefits={['Conductor','Agua','Nevera', '8 Viajeros', 'Corta distancia', 'Larga distancia', "Protocolo Covid"]}
        brands={['mercedes']}
        image={vito}
        />
        <ImageCard 
        title="Sedan" 
        benefits={['Conductor','Agua','Nevera', '3 Viajeros', 'Corta distancia', 'Larga distancia',"Protocolo Covid"]}
        brands={['mercedes', 'skoda']}
        image={skoda}
        />
        
        
    </div>
)

export default OurFleet