import React from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { SocketContext } from '../context/SocketContext'

const Meet = () => {
    const { myVideo, userVideo } = React.useContext(SocketContext)
    
    return (
        <div>
            <video playsInline muted ref={myVideo} autoPlay className="video"></video>
            <video playsInline ref={userVideo} autoPlay className="video"></video>
        </div>
    )
}

export default Meet