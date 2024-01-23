import React from 'react'
import '../css/Home_Interviewer.css'
const Home = () => {
  return (
    <div className='margin-auto'>
      <div className='outer-interviewer'>
        <div className='main-interview-A'>
          <div className='left'>
            <div className='text-A'>
              <p>Stand strong in the storm, for it is the bracing winds that shape the mightiest trees</p>
            </div>
            <div className='text-B'>
              <p>Welcome to our online interview hub, where opportunities meet talent. Designed to connect employers with top-notch candidates. Navigate user-friendly features, discover insightful resources, and embark on a journey of meaningful conversations. Your next career milestone awaits – dive into a world of possibilities and make your interview experience exceptional</p>
            </div>
            <div className='interview-submit'>
              <button type="reset">Create Meeting</button>
            </div>
          </div>
          <div className='right'>
            <img src='Webinar-cuate.png'></img>
          </div>

        </div>

      </div>
      <div className='Details'>
        <h3 className='h3-details'>Interviewee Details</h3>
      </div>

      <div className='scroll-details'>

        <div className='card-details'>

          <div className='card-A-witdh'>
            <img src='A-bg.png' className='A-img-width'></img>
          </div>
          <div className='text-width'>
            <p className='text-A-bold'>Name : Serena Rodriguez</p>
          </div>
          <div className='text-width'>
            <p className='text-bold'>Qualification: Bachelor's degree in Computer Science</p>
          </div>
          <div className='take-meet'>
            <button type="reset" onclick="location.href='http:/Html/Storepage.html'" className='take-meet-btn'>Take Meeting</button>
          </div>
        </div>

        <div className='card-details'>
          <div className='card-A-witdh'>
            <img src='B-bg.png' className='A-img-width'></img>
          </div>
          <div className='text-width'>
            <p className='text-A-bold'>Name : Serena Rodriguez</p>
          </div>
          <div className='text-width'>
            <p className='text-bold'>Qualification: Bachelor's degree in Computer Science</p>
          </div>
          <div className='take-meet'>
            <button type="reset" onclick="location.href='http:/Html/Storepage.html'" className='take-meet-btn'>Take Meeting</button>
          </div>
        </div>

        <div className='card-details'>
          <div className='card-A-witdh'>
            <img src='C-bg.png' className='A-img-width'></img>
          </div>
          <div className='text-width'>
            <p className='text-A-bold'>Name : Serena Rodriguez</p>
          </div>
          <div className='text-width'>
            <p className='text-bold'>Qualification: Bachelor's degree in Computer Science</p>
          </div>
          <div className='take-meet'>
            <button type="reset" onclick="location.href='http:/Html/Storepage.html'" className='take-meet-btn'>Take Meeting</button>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>


  )
}

export default Home