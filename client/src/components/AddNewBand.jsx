import { useContext } from 'react'
import { SocketContext } from '../context/socketContext'
import Swal from "sweetalert2";

export const AddNewBand = ( ) => {

  const { socket } = useContext( SocketContext );

  const handleOnClick = async () => {

    Swal.fire({
      title: 'Add new Band',
      icon: 'question',
      input: 'text',
      inputValue: '',
      confirmButtonText: 'Add Band',
      focusConfirm: false,
      inputValidator: ( value ) => {
        if(!value)
        return 'Band name is required'
      }
    })

    .then( ( result ) => {
      if( result.isDenied ){
        Swal.fire({
          icon: 'error'
        })
      }
      if( result.isConfirmed ){
        socket.emit('add-band', result.value );
        Swal.fire({
          title:'New Band add',
          icon: 'success'
        })
      }
    })
}


  return (
    <span className='addNew__item' onClick={ handleOnClick }>Add New</span>
  )
}

export default AddNewBand