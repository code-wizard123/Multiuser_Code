import React, { useEffect, useCallback, useState } from 'react';
import { useSocket } from '../context/SocketProvider';
import peer from '../service/peer';
import ReactPlayer from 'react-player';

const Meet = () => {
    const socket = useSocket();

    const [remoteSocketId, setRemoteSocketId] = useState('');
    const [myStream, setMyStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);

    const handleUserJoined = useCallback(({ socketId }) => {
        setRemoteSocketId(socketId);
    }, []);

    const handleCallUser = useCallback(async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

        const offer = await peer.getOffer();
        socket.emit('call:user', { to: remoteSocketId, offer });
        setMyStream(stream);
    }, [socket, remoteSocketId]);


    const handleIncomingCall = useCallback(async ({ from, offer }) => {
        setRemoteSocketId(from);

        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setMyStream(stream);

        const ans = await peer.getAnswer(offer);
        socket.emit('call:accepted', { to: from, ans });
    }, [socket]);

    const sendStreams = useCallback(() => {
        for (const track of myStream.getTracks()) {
            peer.peer.addTrack(track, myStream);
        }
    }, [myStream]);

    const handleCallAccepted = useCallback(({ from, ans }) => {
        peer.setLocalDescription(ans);
        console.log("Call Accepted");
        sendStreams();
    }, [sendStreams]);

    const handleNegotiationNeeded = useCallback(async () => {
        const offer = await peer.getOffer();
        socket.emit('peer:nego:needed', { to: remoteSocketId, offer });
    }, [socket, remoteSocketId]);

    useEffect(() => {
        peer.peer.addEventListener('negotiationneeded', handleNegotiationNeeded);

        return () => {
            peer.peer.removeEventListener('negotiationneeded', handleNegotiationNeeded);
        }
    }, [handleNegotiationNeeded]);

    const handleIncomingNegotiation = useCallback(async ({ from, offer }) => {
        const ans = await peer.getAnswer(offer);
        socket.emit('peer:nego:done', { to: from, ans });
    }, [socket]);

    const handleNegotiationFinal = useCallback(async ({ ans }) => {
        await peer.setLocalDescription(ans);
    }, []);


    useEffect(() => {
        peer.peer.addEventListener('track', async (e) => {
            const remoteStream = e.streams;
            console.log("GOT TRACKS!");
            setRemoteStream(remoteStream[0]);
        });
    }, []);

    useEffect(() => {
        socket.on('user:joined', handleUserJoined);
        socket.on('incoming:call', handleIncomingCall);
        socket.on('call:accepted', handleCallAccepted);
        socket.on('peer:nego:needed', handleIncomingNegotiation);
        socket.on('peer:nego:final', handleNegotiationFinal);
        return () => {
            socket.off('user:joined', handleUserJoined);
            socket.off('incoming:call', handleIncomingCall);
            socket.off('call:accepted', handleCallAccepted);
            socket.off('peer:nego:needed', handleIncomingNegotiation);
            socket.off('peer:nego:final', handleNegotiationFinal);
        }
    }, [socket, handleUserJoined, handleIncomingCall, handleCallAccepted, handleIncomingNegotiation, handleNegotiationFinal]);

    return (
        <div>
            <h1>Meet</h1>
            <h4>{remoteSocketId ? "Connected" : "No one in Room"}</h4>
            {myStream && <button onClick={sendStreams}>Send Streams</button>}
            {remoteSocketId && <button onClick={handleCallUser}>CALL</button>}
            {myStream &&
                <>
                    <h2>My Stream</h2>
                    <ReactPlayer url={myStream} playing muted controls={false} />
                </>
            }
            {remoteStream &&
                <>
                    <h2>Remote Stream</h2>
                    <ReactPlayer url={remoteStream} playing controls={false} />
                </>
            }
        </div>
    );
}

export default Meet;