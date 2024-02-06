import socketIOClient from "socket.io-client";
import { createContext, useEffect } from "react";
const WS = "http://localhost:5000";

export const RoomContext = createContext(null);

const ws = socketIOClient(WS);

export const RoomProvider = ({ children }) => {
    useEffect(() => {
        ws.on('room-created', (room_id) => {
            console.log(room_id);
        })
    }, []) 

    return (
        <RoomContext.Provider value={{ ws }}>
            {children}
        </RoomContext.Provider>
    );
}
