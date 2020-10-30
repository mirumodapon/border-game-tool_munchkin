const express = require('express');
const app = express();

const SocketServer = require('ws').Server;

app.use(express.json());

// API

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const wss = new SocketServer({ server, path: '/room' });
// ws

var clients = {
    null: [],
};

wss.on('connection', (ws, req) => {
    //console.log(ws);
    let roomNumber = 'null';
    let temp = req.url.split('?')
    if (temp[1] !== undefined) temp = temp[1].split('=');
    if (temp[0] === 'room') roomNumber = temp[1];

    ws.room = roomNumber;

    console.log(wss.clients.size);

    ws.on('message', msg => {
        let m = JSON.parse(msg);
        wss.clients.forEach(
            element => {
                if (element.room == m.room) element.send(msg)
            }
        );
    });

    ws.on('close', (ws) => {
        console.log(wss.clients.size);
    });
});
