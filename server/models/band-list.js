const Band = require("./band");


class BandList { 

    constructor () {

        this.bands = [ 
            new Band('The Beatles'),
            new Band('The Rolling Stones')
        ];

    };

    addBand( name ) {
        const newBand = new Band( name );
        this.bands.push( newBand );

        return this.bands;
    }

    removeBand( id ) { 
        this.bands = this.bands.filter( Band => band.id !== id );

    }

    getBands() {
        return this.bands;
    }

    increaseVotes( id ){

        this.bands = this.bands.map( band => {

            if( band.id === id ){
                band.votes += 1;
            }

            return band;

        } )

    }
    changeBandName( id, newName ){

        this.bands = this.bands.map( band => {

            if( band.id === id ){

                band.name = newName;
            }
            
            return band;

        } )

    }

}


module.exports = BandList;