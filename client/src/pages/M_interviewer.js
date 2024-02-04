import React, { useState, useEffect } from 'react';
import '../css/M_interviewer.css'

const M_interviewer = () => {
  const [isStyle1, setStyle1] = useState(true);
  const [allowSwitch, setAllowSwitch] = useState(true);

  const switchStyles = () => {
    setStyle1((prevStyle) => !prevStyle);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setAllowSwitch(screenWidth < 1200);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  if (!allowSwitch) {
    return (
      <div className='meet-div'>
<div className='inner-div-cam'>

<div className= 'cam-A'>
{/* <img src='interviewer.jpg' className='img-cam-A'></img> */}
</div>

<div className ='cam-B'>
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
    );
  }
  return (
    <div className='meet-div'>
<div className='inner-div-cam'>

<div className={isStyle1 ? 'cam-A' : 'cam-B' }onClick={switchStyles} 
        >
{/* <img src='interviewer.jpg' className='img-cam-A'></img> */}
</div>

<div className={isStyle1 ? 'cam-B' : 'cam-A'} onClick={switchStyles} >
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