const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
const Sockets = require('./sockets');

class Server {

    constructor() {

        this.app = express();

        this.port = process.env.PORT;

        this.server = http.createServer( this.app );

        this.io = socketio( this.server, {});

    }

    middlewares() {

        this.app.use( cors() );

    }

    socketEvents() {

        new Sockets( this.io )

    }

 
    execute() {

        //Middlewares
        this.middlewares();
        this.socketEvents();


        this.server.listen( this.port, () => {
            console.log(`Server running on port ${ this.port }`)
        })

    }

}


module.exports = Server;