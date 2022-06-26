import { useState, useEffect } from "react";
import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

    const { socket, online } = useSocket('http://localhost:4000');

    const [bands, setBands] = useState([])

    useEffect(() => {

        socket.on('current-bands', (bandsList) => {
          setBands( bandsList )
        } )
  
        return () => socket.off('current-bands');
  
    }, [ socket ])

    socket.emit( 'welcome-message', { msg: 'New Client connected'})

    return (
        <SocketContext.Provider value={{ socket, online, bands }}>
            { children }
        </SocketContext.Provider>
    )
}