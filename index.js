const express = require('express');
const path = require('path');
const app = express();

const { Server } = require('ws');

app.use(express.json());

if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static(path.join(__dirname, 'munchkin/build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'munchkin/build', 'index.html'));
    });
} else {
    app.use(express.static(path.join(__dirname, 'munchkin/build')));
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'munchkin/build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const wss = new Server({ server, path: '/munckin' });
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
