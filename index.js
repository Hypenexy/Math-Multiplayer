const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/pages/home.html');
});
app.get('/collaborative', (req, res) => {
    res.sendFile(__dirname + '/client/pages/collaborative.html');
});
app.get('/app', (req, res) => {
    res.sendFile(__dirname + '/client/style/app.css');
});
app.get('/assets*', (req, res) => {
    res.sendFile(__dirname + '/client/' + req.url);
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
server.listen(3000, () => {
    console.log('Listening on *:3000');
});