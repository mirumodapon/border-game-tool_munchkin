import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../css/connect.scss';
import Start from './Start';

class Connect extends Component {
    render() {
        return (
            <Router>
                <div id="connect">
                    <Switch>
                        <Route path="/" exact component={Start} />
                        <Route path="/room" component={Start} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Connect;