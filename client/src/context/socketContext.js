import { createContext } from "react";
import useSocket from "../hooks/useSocket";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

    const { socket, online } = useSocket('http://localhost:4000');

    socket.emit( 'welcome-message', { msg: 'New Client connected'})

    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}