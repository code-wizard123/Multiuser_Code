import React, { useEffect } from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'

const MeetCreate = () => {
    const { ws }= useContext(RoomContext);

    useEffect(() => {
        ws.on('connect', () => {
            console.log('Connected to server');
        })
    },[])

    return (
        <div>MeetCreate</div>
    )
}

export default MeetCreate