import React, { Component, Fragment } from 'react';
import '../css/start.scss';
class Start extends Component {
    state = {
        roomNumber: ""
    }
    start = () => {

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
                        <button className="btn" onClick={this.start}>Start</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Start;