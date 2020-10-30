import React, { Component } from 'react';
import attackIcon from '../image/attack.png';
import goal from '../image/goal.png';
import '../css/room.scss';
class Room extends Component {
    state = {
        list: [
            { name: 'mirumo', attack: 20, level: 9 },
            { name: 'hank', attack: 15, level: 4 },
            { name: 'anthony', attack: 6, level: 8 }
        ]
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
            <li className="listItem">
                <span>{this.props.name}&emsp;</span>
                <img src={goal} className="icon" alt="goal levelIcon" />
                <span>{this.props.level}&emsp;</span>
                <img src={attackIcon} className="icon" alt="attackIcon sword" />
                <span>{this.props.attack}</span>
            </li>
        );
        return (
            <ul>
                {self}
                {temp}
            </ul>
        );
    }
}

export default Room;