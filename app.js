var express = require('express');
var app = express();
var socket = require('socket.io');
app.use(express.static('public'));

var server = app.listen(3000,function(){
    console.log('server on 3000port');
});

var io = socket(server);
io.on('connection',function(socket){
    console.log('socket connected',socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    });
});
