import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../css/start.scss';
class Start extends Component {
    state = {
        roomNumber: ""
    }
    start = () => {
        console.log('start');
        // send message
    }
    onChange = (e) => {
        let room = e.target.value;
        this.setState({ roomNumber: room });
    }
    render() {
        return (
            <Fragment>
                <div id="start">
                    <div className="center">
                        <span className="text">Room Number</span>
                        <input type="number" className="input" onChange={this.onChange} />
                        <button className="btn" onClick={this.start}><Link to="/room">Start</Link></button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Start;