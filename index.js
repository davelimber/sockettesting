var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/', function(req, res){
//   res.sendfile('index.html');
// });



// io.on('connection', function(socket){
//   console.log('a user connected');
//     socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });

// io.on('connection', function (socket) {
//     console.log('before chat message')
//     // socket.broadcast.emit('hi');
//     socket.on('emessage', function (msg) {
//         console.log('hello!!')
//         console.log('message: ' + msg);
//     });
// });

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

// http.listen(3001, function () {
//     console.log('listening on *:3001');
// });