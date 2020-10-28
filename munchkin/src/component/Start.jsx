import React, { Component, Fragment } from 'react';
import '../css/start.scss';
class Start extends Component {
    start = () => {

    }
    render() {
        return (
            <Fragment>
                <div id="start">
                    <div className="center">
                        <span className="text">Room Number</span>
                        <input type="number" className="input" />
                        <button className="btn" onClick={this.start}>Start</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Start;