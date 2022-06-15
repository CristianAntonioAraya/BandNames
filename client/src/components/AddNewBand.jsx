import React from 'react'

const AddNewBand = () => {
  return (
    <div className='addnew__container'>
      <h3>Add Bands</h3>
      <form className='addnew__form'>
        <label>Add new band</label>
        <input placeholder='Metallica...'/>
        <button className='addnew__btn-submit'>Add</button>
      </form>
    </div>
  )
}

export default AddNewBand