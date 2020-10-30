import React, { Component, Fragment } from 'react';
import Level from './Level';
import Attack from './Attack';
import Connect from './Connect';

class Main extends Component {
    render() {
        return (
            <Fragment>
                <Level></Level>
                <Attack></Attack>
                <Connect></Connect>
            </Fragment>
        );
    }
}

export default Main;