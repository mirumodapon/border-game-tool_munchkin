import React, { Component } from 'react';
import '../css/attack.scss';
class Attack extends Component {
    constructor(props) {
        super(props);
        this.state = { attack: 0 };
    }
    Add = () => {
        this.setState({ attack: this.state.attack + 1 });
    }
    Sub = () => {
        this.setState({ attack: this.state.attack - 1 });
    }
    render() {
        return (
            <div id="attack">
                <button className="add btn" onClick={this.Add}>+</button>
                <div className="number">{this.state.attack}</div>
                <button className="sub btn" onClick={this.Sub}>-</button>
                <span className="text">Attack</span>
            </div>
        );
    }
}

export default Attack;