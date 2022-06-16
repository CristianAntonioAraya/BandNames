import io from "socket.io-client"

export const connectSocketServer = () => {
    const socket = io.connect('http://localhost:4000', { transports: ['websocket'] });
    return socket;
}