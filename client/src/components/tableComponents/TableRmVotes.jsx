import { useContext } from "react"
import { SocketContext } from "../../context/socketContext"
import IconMin from "../../icons/IconMin"

export const TableRmVotes = ( { band }) => {

    const { socket } = useContext( SocketContext )

    const handleRmBandVote = (id) => {
        socket.emit('sus-vote', id )
    }

    return (
        <td>
            <button 
                onClick={ () => handleRmBandVote( band.id )}
                className="icon__btn">
                <IconMin className='vote__icon'/>
            </button>
        </td>
    )
}

