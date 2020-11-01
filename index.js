const express = require('express');
const app = express();

const SocketServer = require('ws').Server;

app.use(express.json());

// API

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const wss = new SocketServer({ server, path: '/room' });
// ws

wss.on('connection', (ws, req) => {
    //console.log(ws);
    let roomNumber = 'null';
    let temp = req.url.split('?')
    if (temp[1] !== undefined) temp = temp[1].split('=');
    if (temp[0] === 'room') roomNumber = temp[1];

    ws.room = roomNumber;

    // console.log(ws.room);

    ws.on('message', msg => {
        // console.log(msg);
        wss.clients.forEach(
            element => {
                if (element.room == ws.room && element != ws) element.send(msg)
            }
        );
    });

    ws.on('close', (ws) => {
        // console.log(wss.clients.size);
    });
});
