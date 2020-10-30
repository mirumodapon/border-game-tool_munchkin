import React, { Component, useReducer, useState } from 'react';
import '../css/level.scss';
import { useDispatch, useSelector } from 'react-redux';
import { dealLevel } from '../redux/actions';

const Level = () => {
    const dispatch = useDispatch();

    const select = useSelector(
        state => state.self
    );
    //const [level, setLevel] = useState(select.level);
    return (
        <div id="level">
            <button className="add btn" onClick={e => { dispatch(dealLevel('add')) }}>+</button>
            <div className="number">{select.level}</div>
            <button className="sub btn" onClick={e => { dispatch(dealLevel('sub')) }}>-</button>
            <span className="text">Level</span>
        </div>
    );
}

export default Level;