import React, { Component } from 'react';
import '../css/attack.scss';
import { useDispatch, useSelector } from 'react-redux';
import { dealAttack } from '../redux/actions';

function Attack() {
    const dis = useDispatch();
    const select = useSelector(state => state.self);
    return (
        <div id="attack">
            <button className="add btn" onClick={e => { dis(dealAttack('add')) }}>+</button>
            <div className="number">{select.attack}</div>
            <button className="sub btn" onClick={e => { dis(dealAttack('sub')) }}>-</button>
            <span className="text">Attack</span>
        </div>
    );
}

export default Attack;