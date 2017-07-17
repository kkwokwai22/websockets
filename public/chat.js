// make connection
var socket = io.connect('http://localhost:4000');

// Query Dom

var message = document.getElementById('message')
    handle = document.getElementById('handle')
    btn = document.getElementById('send')
    output = document.getElementById('output')

// Emit events

btn.addEventListener('click', function() {
  console.log(message);
  console.log(handle);
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});


// Listen for events
socket.on('chat', function(data){
  output.innerHTML += '<p><strong>' + data.handle + '</strong> ' + data.message + '</p>';
})
