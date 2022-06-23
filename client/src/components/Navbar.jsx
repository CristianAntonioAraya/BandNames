import { useContext } from "react"
import { SocketContext } from "../context/socketContext";

const Navbar = () => {


  const { online } = useContext( SocketContext );

  return (
    <div className="navbar__container">
        <span className="navbar__title">BandName</span>
        <div>
          <span>Status: </span>
          {
            online 
            ? <span className="navbar__online">Online</span>
            : <span className="navbar__offline">Offline</span>
          }
        </div>
    </div>
  )
}

export default Navbar