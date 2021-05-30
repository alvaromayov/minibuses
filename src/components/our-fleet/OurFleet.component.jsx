import React from 'react';
import ImageCard from '../image-card/ImageCard.component';
import './OurFleet.component.scss';
import skoda from '../../assets/images/skoda-super-b.png';
import vito from '../../assets/images/vito.png';
import microbus from '../../assets/images/microbus.png';
import minibus from '../../assets/images/minibus.png';

const OurFleet = () => (
    <div className="our-fleet">
        <h2>Nuestra flota</h2>
        <div className="our-fleet__container">
            <ImageCard
                title="Vito"
                benefits={['Conductor', 'Agua', 'Nevera', '8 Viajeros', 'Corta distancia', 'Larga distancia', "Protocolo Covid", "Vehiculo adaptado"]}
                brands={['mercedes']}
                image={vito}
            />
            <ImageCard
                title="Sedan"
                benefits={['Conductor', 'Agua', 'Nevera', '3 Viajeros', 'Corta distancia', 'Larga distancia', "Protocolo Covid"]}
                brands={['mercedes', 'skoda']}
                image={skoda}
            />
            <ImageCard
                title="Microbus"
                benefits={['Conductor', 'Agua', 'Nevera', '21 Viajeros', 'Corta distancia', 'Larga distancia', "Protocolo Covid","Vehiculo adaptado"]}
                brands={['mercedes',"skoda"]}
                image={microbus}
            />
            <ImageCard
                title="Minibus"
                benefits={['Conductor', 'Agua', 'Nevera', '40 Viajeros', 'Corta distancia', 'Larga distancia', "Protocolo Covid"]}
                brands={['mercedes']}
                image={minibus}
            />
        </div>
    </div>
)

export default OurFleet