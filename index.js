const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { v4 } = require("uuid");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/pages/home.html');
});
app.get('/collaborative', (req, res) => {
    res.sendFile(__dirname + '/client/pages/collaborative.html');
});
app.get('/collaborativejs', (req, res) => {
    res.sendFile(__dirname + '/client/code/collaborative.js');
});
app.get('/app', (req, res) => {
    res.sendFile(__dirname + '/client/style/app.css');
});
app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/client/style/main.css');
});
app.get('/game', (req, res) => {
    res.sendFile(__dirname + '/client/style/game.css');
});
app.get('/assets*', (req, res) => {
    res.sendFile(__dirname + '/client/' + req.url);
});

io.on('connection', (socket) => {
    const UserRoomID = v4().slice(0, 12).replace('-', '');
    console.log('a user connected');
    console.log('his room code is ' + UserRoomID);
    socket.emit("logon", UserRoomID);
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
server.listen(3000, () => {
    console.log('Listening on *:3000');
});