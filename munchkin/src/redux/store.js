import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { self } from './reduxer';

const reduxer = combineReducers({
    self
});

const middleware = [thunk];

const init = {
    self: {
        level: 0,
        attack: 0,
        room: "0000",
        name: "Player",
        other: []
    }
}
const store = createStore(
    reduxer,
    init,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
