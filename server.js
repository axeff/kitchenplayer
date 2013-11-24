#!/usr/bin/env node
var WebSocketServer = require('websocket').server;
var http = require('http');
var uuid = require('node-uuid');
var fs = require('fs');
var httpConnect = require('connect'),
    httpPort = 8080,
    socketPort = 1338;

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(socketPort, function() {
    console.log((new Date()) + ' Server is listening on port ' + socketPort);
});

wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

//simple array to keep connection references
var connections = [];

wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }

    var connection = request.accept('peer-protocol', request.origin);
    connection.id = uuid.v4();
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function(message) {

        var command = JSON.parse(message.utf8Data);
        
        //register connection and store for later references
        if(command.register){

            connections[connection.id] = connection;
            connection.sendUTF(JSON.stringify({connectionId:connection.id}));
        }
        //process actual commands
        else if(command.receiverId && command.receiverId in connections){
            connections[command.receiverId].sendUTF(JSON.stringify({origin:connection.id,message:command.message}));
        }
        
        

    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});


httpConnect.createServer(httpConnect.static(__dirname)).listen(httpPort);
console.log('Http Listening on ' + httpPort + '...');
console.log('Press Ctrl + C to stop.');
