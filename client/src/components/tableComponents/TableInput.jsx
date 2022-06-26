import { useContext, useState } from "react";
import { SocketContext } from "../../context/socketContext";


export const TableInput = ( { band }) => {  

    const [name, setName] = useState( band.name )
    const { socket } = useContext( SocketContext )

    const handleChangeName = ( e ) => {
        setName( e.target.value )
    }

    const lostFocus = (id) => {
        if( name === '') return;
        socket.emit( 'update-band', { id, name });
    }

    return (
        <td>
            <input 
                value={ name } 
                className='table__input' 
                onChange={ (e) => handleChangeName( e )}
                onBlur={ () => lostFocus( band.id ) }
            />        
        </td>
    )
}
