

class Sockets { 

    constructor( io ) {

        this.io = io;
        this.socketsEvents();

    }

    socketsEvents() {

        this.io.on('connection', ( socket ) => {
            // Listen event: welcome-message
            socket.on('welcome-message', ( data ) => {
                console.log( data )
            })
        
        })

    }


}

module.exports = Sockets;