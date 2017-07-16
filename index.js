const express = require('express');
const socket = require('socket.io');

// App setup
const app = express();
const server = app.listen(4000, function(){
  console.log("app listening on port 4000");
});

// static file
app.use(express.static('public'));


// socket setup
var io = socket(server);
io.on('connection', function(socket){
  console.log('make socket connection', socket.id);
})
