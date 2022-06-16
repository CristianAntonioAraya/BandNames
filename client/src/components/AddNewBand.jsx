import React, { useState } from 'react'

const AddNewBand = ( { socket }) => {

  const [bandName, setBandName] = useState('')

    const handleOnSubmit = (e) => {
      e.preventDefault();
      if(bandName === '') return;
      socket.emit('add-band', bandName );
      setBandName('');
    }


    return (
      <div className='addnew__container'>
        <h3>Add Bands</h3>
        <form className='addnew__form' onSubmit={ handleOnSubmit }>
          <label>Add new band</label>
          <input placeholder='Metallica...' value={ bandName } onChange={ (e)=> setBandName(e.target.value )}/>
          <button className='addnew__btn-submit' type='submit'>Add</button>
        </form>
      </div>
    )
}

export default AddNewBand