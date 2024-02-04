import React, { useState, useEffect } from 'react';
import '../css/M_interviewer.css'

const M_interviewer = () => {
  const [isStyle, setIsStyle] = useState(true);

  const switchStyles = () => {
    if(window.screen.width < 1200){
      setIsStyle(!isStyle);
    }
  }

  return (
    <div className='meet-div'>
      <div className='inner-div-cam'>

        <div className= {isStyle ? 'cam-A left-cam' : 'cam-B left-cam'} onClick={switchStyles} >
          {/* <img src='interviewer.jpg' className='img-cam-A'></img> */}
        </div>

        <div className={isStyle ? 'cam-B right-cam' : 'cam-A right-cam'} onClick={switchStyles} >
          {/* <img src='interviewee.jpg' className='img-cam-B'></img> */}
        </div>
      </div>

      <div className='options'>
        <div className='center-optn'>

          <div className='btn-A'>
            <button><img src='comment.png'></img></button>
            <p>Chat</p>
          </div>

          <div className='btn-B'>
            <button><img src='video.png'></img></button>
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

export default M_interviewer




// <div className="scrollmenu">
//   <a href="#home">Home</a>
//   <a href="#news">News</a>
//   <a href="#contact">Contact</a>
//   <a href="#about">About</a>
//   <a href="#support">Support</a>
// </div>