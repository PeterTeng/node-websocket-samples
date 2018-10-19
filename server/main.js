// WebSocket Server
var Server = require('ws').Server;

var server = new Server({ port: 9000 });

server.on("connection", function(webSocket) {
  webSocket.on("message", function(message) {
    console.log(`Message Received: ${message}`);
  });

  webSocket.on("close", function() {
    console.log("Client disconnected.");
  });
});