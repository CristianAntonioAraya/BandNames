import { useContext } from "react"
import { SocketContext } from "../../context/socketContext"
import IconTrash from "../../icons/IconTrash"


export const TableDelete = ( { band }) => {

    const { socket } = useContext( SocketContext )

    
    const handleDelBand = ( id ) => {
        socket.emit('del-band', id )
    }

    return (
        <td>
            <button 
                onClick={ () => handleDelBand( band.id )}
                className="icon__btn">
                <IconTrash className="trash__icon"/>
            </button>
        </td>
    )
}
