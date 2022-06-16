import Navbar from "./components/Navbar"
import BandTable from "./components/BandTable"
import AddNewBand from "./components/AddNewBand"
import { useState } from "react"
import { connectSocketServer } from "./sockets/connectSocket"

const App = () => {

  const [socket] = useState(connectSocketServer())

  const addBandVote = (id) => {
    socket.emit('add-vote', id )
  }

  const susBandVote = (id) => {
    socket.emit('sus-vote', id )
  }
  const delBand = ( id ) => {
    socket.emit('del-band', id )
  }


  return (
    <div className="app__container">

      <Navbar socket={socket} />

      <div className="content__container">
        <BandTable socket={socket} addVote={ addBandVote } susVote={ susBandVote } delBand={ delBand }/>
        <AddNewBand socket={socket}/>
      </div>
    </div>
  )
}

export default App