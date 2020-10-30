import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import attackIcon from '../image/attack.png';
import goal from '../image/goal.png';
import '../css/room.scss';
class Room extends Component {
    state = {
        list: [
            { name: 'mirumo', attack: 20, level: 9 },
            { name: 'hank', attack: 15, level: 4 },
            { name: 'anthony', attack: 6, level: 8 }
        ],
        name: this.props.name,
        editName: <span>{this.props.name}&emsp;</span>
    }
    completee = () => {
        let temp = <span>{this.state.name}&emsp;</span>;
        this.setState({ editName: temp });
        /// send message
    }
    editName = () => {
        let temp = <input className="editName" onBlur={this.completee} onChange={this.change}></input>;
        this.setState({ editName: temp });
    }
    change = (e) => {
        this.setState({ name: e.target.value });
    }
    render() {
        const temp = this.state.list.map(
            (item, index) =>
                <li className="listItem" key={index}>
                    <span>{item.name}&emsp;</span>
                    <img src={goal} className="icon" alt="goal levelIcon" />
                    <span>{item.level}&emsp;</span>
                    <img src={attackIcon} className="icon" alt="attackIcon sword" />
                    <span>{item.attack}</span>
                </li>
        );
        const self = (
            <li className="listItem" onClick={this.editName}>
                {this.state.editName}
                <img src={goal} className="icon" alt="goal levelIcon" />
                <span>{this.props.level}&emsp;</span>
                <img src={attackIcon} className="icon" alt="attackIcon sword" />
                <span>{this.props.attack}</span>
            </li>
        );
        return (
            <Fragment>
                <ul>
                    {self}
                    {temp}
                </ul>
                <br />
                <button className="exit"><Link to="/">Exit</Link></button>
            </Fragment>
        );
    }
}

export default Room;