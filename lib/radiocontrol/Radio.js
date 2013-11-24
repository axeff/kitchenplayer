function Radio(host, port, updateFn) {
    var playpauseState = false;
    
    this.host = host;
    this.port = port;
    
    this.Socket = new Socket(host, port, function(message){

        // try to decode json (I assume that each message from server is json)
        try {
            var json = JSON.parse(message.data);
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ', message.data);
            return;
        }
        // handle incoming message
        updateFn(json.station);
    });


    this.playpause = function() {
        this.playpauseState = this.playpauseState ? false : true; 
        this.Socket.send(JSON.stringify({playpause: this.playpauseState}));
    }
   
    this.volume = function(percentage){
        this.Socket.send(JSON.stringify({volume: percentage}));
    }
    
    this.playStation = function(name, url){
        this.Socket.send(JSON.stringify({station: {url: url, name: name}}));
    }
    
    this.updateTitle = function(success){
        
    }
}

function Socket(host, port, onmessage) {
    
    // if user is running mozilla then use it's built-in WebSocket
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    this.connection = new WebSocket('ws://' + host + ':' + port + '/',['peer-protocol']);

    this.connection.onmessage = onmessage;

    this.send = function(param){
        this.connection.send(param);
    }.bind(this);

    this.onmessage = function(overwrite){

        this.connection.onmessage(overwrite);
    }.bind(this);

    this.connection.onopen = function () {
        // connection is opened and ready to use
        console.log("connection is opened and ready to use");

        // establish connection with 
        this.connection.send(JSON.stringify({register:true}))
    }.bind(this);

    this.connection.onerror = function (error) {
        // an error occurred when sending/receiving data
        console.log("an error occurred when sending/receiving data",error);
    };

    
    
}