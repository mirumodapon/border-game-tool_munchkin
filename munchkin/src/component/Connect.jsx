import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../css/connect.scss';
import Start from './Start';
import Room from './Room';

class Connect extends Component {
    render() {
        return (
            <Router>
                <div id="connect">
                    <Switch>
                        <Route path="/" exact component={Start} />
                        <Route path="/room">
                            <Room attack="9" level="4" name="me"></Room>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Connect;