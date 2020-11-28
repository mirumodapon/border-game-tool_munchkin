import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../css/start.scss';
import { useDispatch, useSelector } from 'react-redux';
import { editName, enterRoom } from '../redux/actions';
function Start() {
    const select = useSelector(
        state => state.self
    )
    const disp = useDispatch();
    const [name, setName] = useState(select.name);
    const [room, setRoom] = useState('0000');
    const start = () => {
        disp(editName(name));
        disp(enterRoom(room));
    }
    return (
        <Fragment>
            <div id="start">
                <div className="center">
                    <span className="text">Name</span>
                    <input className="input" onChange={e => setName(e.target.value)} value={name} maxlength="10" />
                    <span className="text">Room Number</span>
                    <input type="number" className="input" onChange={e => setRoom(e.target.value)} />
                    <button className="btn" onClick={start}><Link to="/room">Start</Link></button>
                </div>
            </div>
        </Fragment>
    );
}
export default Start;