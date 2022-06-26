import { useContext } from "react"
import { SocketContext } from "../context/socketContext";
import AddNewBand from "./AddNewBand";

export const Navbar = () => {

    const { online } = useContext( SocketContext );

   
    
    return (
      <div className="navbar__container">
          <span className="navbar__title">BandName</span>
          <div className="navbar__items">
              <AddNewBand/>
            <div className="navbar__status-container">
              <span className="navbar__status">Status: </span>
              {
                online 
                ? <span className="navbar__online">Online</span>
                : <span className="navbar__offline">Offline</span>
              }
            </div>
          </div>
      </div>
    )
}

export default Navbar