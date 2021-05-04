import React from 'react';
import './ImageCard.component.scss';
import CheckIcon from '@material-ui/icons/Check';
import mercedes from '../../assets/images/mercedes-icon.png';
import skoda from '../../assets/images/skoda-icon.png';

const ImageCard = (props) => {
    const benefits = props.benefits;
    const brands = props.brands;
    return (
        <div className="card">
            <div className="card__container">
                <div className="card__image-container">
                    <img className="card__image" src={props.image} alt="" />
                </div>
                <h2 className="card__title">{props.title}</h2>
                <p className="card__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tellus ut enim ullamcorper semper cursus sed magna. Duis posuere libero vel turpis dapibus, sit amet cursus tellus imperdiet.</p>
                <ul className="card__included">
                    {benefits.map((benefit) => (<li><CheckIcon style={{ color: "green" }} />{benefit}</li>))}
                </ul>
                <span>Marcas disponibles</span>
                <ul className="card__brands">
                    {
                        brands.map(
                            (brand) => (brand === "mercedes" ? <img class="card__brand" src={mercedes} alt=""/> : <img class="card__brand" src={skoda} alt="" />)
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default ImageCard