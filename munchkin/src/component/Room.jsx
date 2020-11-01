import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import attackIcon from '../image/attack.png';
import goal from '../image/goal.png';
import '../css/room.scss';
import { update } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

function Room() {
    const disp = useDispatch();
    const select = useSelector(
        state => state.self
    );
    var ws = null;
    useEffect(
        () => {
            ws = new WebSocket(`${window.location.origin.replace(/^https/, 'wss').replace(/^http/, 'ws')}/munchkin?room=${select.room}`);

            ws.onopen = () => {
                let msg = { name: select.name, attack: select.attack, level: select.level, disconnect: false };
                ws.send('ask');
                ws.send(JSON.stringify(msg));
            }
            ws.onmessage = (msg) => {
                if (msg.data == "ask") {
                    let msg = { name: select.name, attack: select.attack, level: select.level, disconnect: false };
                    ws.send(JSON.stringify(msg));
                } else disp(update(JSON.parse(msg.data)));
            }
            return () => {
                ws.send(JSON.stringify({ name: select.name, disconnect: true }));
                ws.close();
                ws = null;
            }
        },
        [select.name, select.level, select.attack]
    );
    const self = (
        <li className="listItem">
            <span>{select.name}&emsp;</span>
            <img src={goal} className="icon" alt="goal levelIcon" />
            <span>{select.level}&emsp;</span>
            <img src={attackIcon} className="icon" alt="attackIcon sword" />
            <span>{select.attack}</span>
        </li>
    );
    const temp = select.other.map(
        (item, index) =>
            <li className="listItem" key={index}>
                <span>{item.name}&emsp;</span>
                <img src={goal} className="icon" alt="goal levelIcon" />
                <span>{item.level}&emsp;</span>
                <img src={attackIcon} className="icon" alt="attackIcon sword" />
                <span>{item.attack}</span>
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


// class Room extends Component {
//     state = {
//         list: [
//             { name: 'mirumo', attack: 20, level: 9 },
//             { name: 'hank', attack: 15, level: 4 },
//             { name: 'anthony', attack: 6, level: 8 }
//         ],
//         name: this.props.name,
//         editName: <span>{this.props.name}&emsp;</span>
//     }
//     
//     editName = () => {
//         let temp = <input className="editName" onBlur={this.completee} onChange={this.change}></input>;
//         this.setState({ editName: temp });
//     }
//     change = (e) => {
//         this.setState({ name: e.target.value });
//     }
//     render() {
//         


//     }
// }

export default Room;