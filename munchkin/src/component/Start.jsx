import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../css/start.scss';
class Start extends Component {
    state = {
        roomNumber: "",
        name: ""
    }
    start = () => {
        console.log('start');
        // send message
    }
    render() {
        return (
            <Fragment>
                <div id="start">
                    <div className="center">
                        <span className="text">Name</span><input className="input" onChange={e => this.setState({ name: e.target.value })}></input>
                        <span className="text">Room Number</span>
                        <input type="number" className="input" onChange={e => this.setState({ roomNumber: e.target.value })} />
                        <button className="btn" onClick={this.start}><Link to="/room">Start</Link></button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Start;