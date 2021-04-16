import { createContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

export const WebSocketContext = createContext(null);

const WebSocketProvider = ({ username, children, token }) => {
    const [socket, setSocket] = useState(null);
    const [ready, setReady] = useState(null);

    console.log(username)

    useEffect(() => {
        if (socket === null) {
            const ws = io.connect('http://localhost:3030', {
                query: `username=${username}&token=${token}`
            });
            ws.on('connect', () => setReady(true));
            setSocket(ws);

 
        }
    }, [username, token, socket])

    return (
        <WebSocketContext.Provider value={{ socket, ready }}>
            {children}
        </WebSocketContext.Provider>
    );
};

export default WebSocketProvider;