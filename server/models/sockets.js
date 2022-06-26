const BandList = require("./band-list");


class Sockets { 

    constructor( io ) {

        this.io = io;

        this.bandList = new BandList();

        this.socketsEvents();

    }

    socketsEvents() {

        this.io.on('connection', ( socket ) => {
            
            socket.emit('current-bands', this.bandList.getBands() )
            //Add vote to band
            socket.on( 'add-vote', id => {
                this.bandList.increaseVotes( id )
                this.io.emit('current-bands', this.bandList.getBands() )
            } )
            //Sustract vote to a band 
            socket.on( 'sus-vote', id => {
                this.bandList.decreaseVotes( id )
                this.io.emit('current-bands', this.bandList.getBands() )
            } )
            //Remove a band
            socket.on('del-band', id => {
                this.bandList.removeBand( id )
                this.io.emit('current-bands', this.bandList.getBands() )
            })
            //Add new band
            socket.on('add-band', name => {
                this.bandList.addBand( name )
                this.io.emit('current-bands', this.bandList.getBands() )
            })
            //UpdateName
            socket.on('update-band', ({id, name}) => {
                this.bandList.changeBandName( id, name )
                this.io.emit('current-bands', this.bandList.getBands() )
            })
        })

    }


}

module.exports = Sockets;