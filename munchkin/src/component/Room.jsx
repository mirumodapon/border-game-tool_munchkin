import React, { useEffect, Fragment, Component, useRef } from 'react';
import { Link } from 'react-router-dom';
import attackIcon from '../image/attack.png';
import goal from '../image/goal.png';
import '../css/room.scss';
import { update, clear } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

const useWS = () => {
    const disp = useDispatch();
    const select = useSelector((state) => state.self);
    const url = `${window.location.origin.replace(/^http/, 'ws')}/munckin?room=${select.room}`;
    const ws = useRef();
    var loop;
    const onMessage = (msg) => {
        if (msg.data == 'ask') Send();
        else disp(update(JSON.parse(msg.data)));
    }
    const onOpen = () => {
        // console.log('WS client opened');
        ws.current.send(JSON.stringify({ name: select.name, level: select.level, attack: select.attack, disconnect: false }));
        ws.current.send('ask');
        loop = setInterval(
            () => {
                ws.current.send('connect');
            },
            30000
        )
    }
    const onClose = () => {
        ws.current.send(JSON.stringify({ name: select.name, disconnect: true }));
        clearInterval(loop);
        // console.log('WS client closed');
    }
    const onError = () => {
        // console.log('WS client errored');
        window.location.href = '/';
    }

    const initWebsocket = () => {
        if (ws.current) {
            ws.current.close();
        }
        ws.current = new WebSocket(url);
        ws.current.addEventListener('message', onMessage)
        ws.current.addEventListener('open', onOpen)
        ws.current.addEventListener('close', onClose)
        ws.current.addEventListener('error', onError)
    };
    const endWebsocket = () => {
        if (ws.current) {
            ws.current.send(JSON.stringify({ name: select.name, disconnect: true }));
            ws.current.close();
        }
    };
    const Send = () => {
        // console.log('send');
        ws.current.send(JSON.stringify({ name: select.name, level: select.level, attack: select.attack, disconnect: false }));
    }
    useEffect(
        () => {
            if (!ws.current) initWebsocket()
        },
        [initWebsocket]
    );
    return {
        ws: ws.current,
        Send,
        initWebsocket,
        endWebsocket,
    };
}

function Room() {
    const disp = useDispatch();
    const select = useSelector(
        state => state.self
    );
    const { ws, initWebsocket, endWebsocket, Send } = useWS();
    useEffect(
        () => {
            if (ws) Send();
        },
        [select.name, select.attack, select.level]
    );
    const self = (
        <li className="listItem">
            <span>{select.name}&emsp;</span>
            <img src={goal} className="icon" alt="goal levelIcon" />
            <span>{select.level}&emsp;</span>
            <img src={attackIcon} className="icon" alt="attackIcon sword" />
            <span>{select.attack}</span>
        </li>
    );
    const temp = select.other.map(
        (item, index) =>
            <li className="listItem" key={index}>
                <span>{item.name}&emsp;</span>
                <img src={goal} className="icon" alt="goal levelIcon" />
                <span>{item.level}&emsp;</span>
                <img src={attackIcon} className="icon" alt="attackIcon sword" />
                <span>{item.attack}</span>
            </li>
    );
    return (
        <Fragment>
            <ul>
                {self}
                {temp}
            </ul>
            <br />
            <button className="exit" onClick={() => { ws.send({ name: select.name, disconnect: true }); ws.close(); disp(clear()); }}><Link to="/">Exit</Link></button>
        </Fragment>
    );
}

export default Room;