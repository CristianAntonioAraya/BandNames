import Navbar from "./components/Navbar"
import BandTable from "./components/BandTable"
import AddNewBand from "./components/AddNewBand"
import { useState } from "react"
import { connectSocketServer } from "./sockets/connectSocket"

const App = () => {

  const [socket] = useState(connectSocketServer())

  return (
    <div className="app__container">

      <Navbar socket={socket} />

      <div className="content__container">
        <BandTable socket={socket} />
        <AddNewBand/>
      </div>
    </div>
  )
}

export default App