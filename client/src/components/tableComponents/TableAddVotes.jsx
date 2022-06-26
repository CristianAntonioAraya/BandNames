import { useContext } from "react"
import { SocketContext } from "../../context/socketContext"
import IconPlus from "../../icons/IconPlus"


export const TableAddVotes = ({ band }) => {

    const { socket } = useContext( SocketContext )

    const handleAddBandVote = (id) => {
        socket.emit('add-vote', id )
    }

    return (
        <td>
            <button 
                onClick={ () => handleAddBandVote( band.id )}
                className="icon__btn">
                <IconPlus className='vote__icon'/>
            </button>
        </td>
    )
}
