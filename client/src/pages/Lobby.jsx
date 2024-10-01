import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSocket } from '../context/SocketProvider';

const Lobby = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [meetId, setMeetId] = useState('');

    const socket = useSocket();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        socket.emit('meet:join', { meetId });
    }, [socket, meetId]);

    const handleJoinMeet = useCallback(() => {
        navigate(`/meet/${meetId}`);
    }, [navigate, meetId]);

    useEffect(() => {
        socket.on('meet:join', handleJoinMeet);

        return () => {
            socket.off('meet:join', handleJoinMeet);
        }
    }, [socket, handleJoinMeet]);

    return (
        <div>
            <h1>Lobby</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                <br />
                <label htmlFor="meet_id">Meet ID:</label>
                <input type="text" id="meet_id" name="meet_id" value={meetId} onChange={e => setMeetId(e.target.value)} />
                <br />
                <button type="submit">Join Meet</button>
            </form>
        </div>
    );
}

export default Lobby;