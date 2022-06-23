import { useContext, useEffect, useState } from "react"
import { SocketContext } from "../context/socketContext"

const BandTable = () => {

    const [bands, setBands] = useState([])

    const { socket } = useContext( SocketContext )

    useEffect(() => {

      socket.on('current-bands', (bandsList) => {
        setBands( bandsList )
      } )

      return () => socket.off('current-bands');

    }, [ socket ])
    
    const handleChangeBandName = ( event , id ) => {
        const newName = event.target.value;

        setBands( bands => bands.map( band => {

            if( band.id === id ){
                band.name = newName;
            }
            return band;
        }))
    }

    const sendChanges = ( id, name ) => {
        socket.emit('update-band', { id, name })
    }

    const handleAddBandVote = (id) => {
        socket.emit('add-vote', id )
    }

    const handleSusBandVote = (id) => {
        socket.emit('sus-vote', id )
    }

    const handleDelBand = ( id ) => {
        socket.emit('del-band', id )
    }


    return (
        <table>

            <thead>
                <tr className="table__head">
                    <td className="name__clmn">Band name</td>
                    <td className="vote__clmn">Votes</td>
                    <td className="btn__clmn">&nbsp;</td>
                    <td className="btn__clmn">&nbsp;</td>
                    <td className="btn__clmn">&nbsp;</td>
                </tr>
            </thead>
            <tbody>
                {
                    bands.map( band => (
                        <tr key={band.id}>
                            <td>
                                <input 
                                    value={band.name} 
                                    className='table__input' 
                                    onChange={ (e)=> handleChangeBandName( e, band.id )}
                                    onBlur={ () => sendChanges( band.id, band.name ) }
                                />        
                            </td>
                            <td>{band.votes}</td>
                            <td>
                                <button 
                                    onClick={ () => handleSusBandVote( band.id )}
                                    className="btn__add">
                                    -1
                                </button>
                            </td>
                            <td>
                                <button 
                                    className="btn__add"
                                    onClick={ () => handleAddBandVote( band.id )}>
                                    +1
                                </button>
                            </td>
                            <td>
                                <button 
                                    onClick={ () => handleDelBand( band.id )}
                                    className="btn__delete">
                                        Del
                                </button>
                            </td>
                        </tr>
                        ))
                }
                

            </tbody>

        </table>    
    )
}

export default BandTable