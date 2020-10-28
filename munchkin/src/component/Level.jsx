import React, { Component } from 'react';
import '../css/level.scss';
class Level extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 0 };
    }
    Add = () => {
        this.setState({ level: this.state.level + 1 });
    }
    Sub = () => {
        this.setState({ level: this.state.level - 1 });
    }
    render() {
        return (
            <div id="level">
                <button className="add btn" onClick={this.Add}>+</button>
                <div className="number">{this.state.level}</div>
                <button className="sub btn" onClick={this.Sub}>-</button>
                <span className="text">Level</span>
            </div>
        );
    }
}

export default Level;