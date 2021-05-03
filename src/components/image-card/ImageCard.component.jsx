import React from 'react';
import './ImageCard.component.scss';
import CheckIcon from '@material-ui/icons/Check';

const ImageCard = () => (
    <div className="card">
        <div className="card__container">
            <div className="image-container">
                <img className="card__image" src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80" alt="" />
            </div>
            <h2 className="card__title">Vito</h2>
            <p className="card__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tellus ut enim ullamcorper semper cursus sed magna. Duis posuere libero vel turpis dapibus, sit amet cursus tellus imperdiet.</p>
            <ul className="card__included">
                <li><CheckIcon style={{ color: "green" }} /> 1</li>
                <li><CheckIcon style={{ color: "green" }}/> 2</li>
                <li><CheckIcon style={{ color: "green" }}/> 3</li>
            </ul>
            <span>Marcas disponibles</span>
            <ul className="card__brands">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    </div>
)

export default ImageCard