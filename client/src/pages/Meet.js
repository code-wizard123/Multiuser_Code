import React, { useState, useEffect, useRef } from 'react';
import '../css/M_interviewer.css';

const Meet = () => {
  const [isStyle, setIsStyle] = useState(true);
  const localStream = useRef(null);

  useEffect(() => {
    const leftVideo = document.getElementById('left-video');

    const init = async () => {
      try {
        localStream.current = await navigator.mediaDevices.getUserMedia({ video: true })
        leftVideo.srcObject = localStream.current;
      }
      catch (err) {
        console.log(err);
      }
    }

    init();
  }, [])

  const switchStyles = () => {
    if (window.screen.width < 1200) {
      setIsStyle(!isStyle);
    }
  }

  const toggleCamera = () => {
    let videoTrack = localStream.current.getTracks().find(track => track.kind === 'video')

    if (videoTrack.enabled) {
      videoTrack.enabled = false;
    }
    else {
      videoTrack.enabled = true;
    }
  }

  return (
    <div className='meet-div'>
      <div className='inner-div-cam'>

        <div className={isStyle ? 'cam-A left-cam' : 'cam-B left-cam'} onClick={switchStyles} >
          <video id='left-video' autoPlay></video>
        </div>

        <div className={isStyle ? 'cam-B right-cam' : 'cam-A right-cam'} onClick={switchStyles} >
          <video id='right-video' autoPlay></video>
        </div>
      </div>

      <div className='options'>
        <div className='center-optn'>

          <div className='btn-A'>
            <button><img src='comment.png'></img></button>
            <p>Chat</p>
          </div>

          <div className='btn-B'>
            <button onClick={toggleCamera}><img src='video.png'></img></button>
            <p>Video</p>
          </div>

          <div className='btn-C'>
            <button><img src='code.png'></img></button>
            <p>Code</p>
          </div>

          <div className='btn-D'>
            <button><img src='telephoneA.png'></img></button>
            <p>Disconnect</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Meet




// <div className="scrollmenu">
//   <a href="#home">Home</a>
//   <a href="#news">News</a>
//   <a href="#contact">Contact</a>
//   <a href="#about">About</a>
//   <a href="#support">Support</a>
// </div>