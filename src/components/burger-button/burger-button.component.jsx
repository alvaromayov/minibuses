import React, { Component } from 'react';
import "./burger-button.component.scss";

class BurgerButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }

    clickBurger = () => {
        let buttonStatus = this.state.active;
        this.setState({
            active: !buttonStatus
        })
    }

    render() {
        return (
            <div className={`burger-menu ${this.state.active ? "f-button--active" : ""}`} onClick={this.clickBurger}>
                <span className="f-button"></span>
                <span className="f-button"></span>
                <span className="f-button"></span>
                <span className="f-button"></span>
                <span className="f-button"></span>
            </div>
        )
    }
}


export default BurgerButton
