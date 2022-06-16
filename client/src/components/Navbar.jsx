import { useEffect, useState } from "react"

const Navbar = ( { socket }) => {

  const [online, setOnline] = useState(false)

  useEffect(() => {
      setOnline( socket.connected )
  }, [socket])

  useEffect(() => {
 
    socket.on("connect", () => {
        setOnline( true );
    });
 
  }, [ socket ]);
  
  useEffect(() => {
 
    socket.on("disconnect", () => {
        setOnline( false );
    });
 
  }, [ socket ]);

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