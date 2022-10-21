var express = require('express');

// App setup
var app = express();
var socket = require('socket.io')

var server = app.listen(3000, function(){
    console.log('listening for requests on port 3000,');
});

let io = socket(server)
io.on('connection', function(socket){
  console.log(`${socket.id} is connected`);
});
io.on("connection", (socket) => {
    console.log("connected ",socket.id);
    // send a message to the client
    socket.emit("hello", "world");
    // receive a message from the client
    socket.on("howdy", (arg) => {
    console.log(arg); // prints "stranger"
    });
    });
