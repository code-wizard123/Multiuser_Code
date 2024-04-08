import React, { useState } from 'react';
import '../css/Home_Interviewee.css';

const HomeIntervieweeWithModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [codeValue, setCodeValue] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleInputChange = (e) => {
    setCodeValue(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Submitted code:', codeValue);
    toggleModal(); // Close the modal after handling the submission
  };

  return (
    <div className='margin-auto-B'>
      <div className='outer-interviewer-B'>
        <div className='main-interview-A-B'>
          <div className='left-B'>
            <div className='text-A-B'>
              <p>Stand strong in the storm, for it is the bracing winds that shape the mightiest trees</p>
            </div>
            <div className='text-B-B'>
              <p>Welcome to our online interview hub, where opportunities meet talent. Designed to connect employers with top-notch candidates. Navigate user-friendly features, discover insightful resources, and embark on a journey of meaningful conversations. Your next career milestone awaits – dive into a world of possibilities and make your interview experience exceptional</p>
            </div>
            <div className='interview-submit-B'>
              <button type="button" onClick={toggleModal}>Join Meeting</button>
              <input
                type='text'
                className='code-submit-B'
                placeholder='Enter the Code'
                value={codeValue}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='right-B'>
            <img src='Webinar-pana.png' alt='Webinar'></img>
          </div>
        </div>
      </div>

      {/* Blurred background */}
      {showModal && <div className="blur-background"></div>}

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Join Meeting</h2>
            <input
              type='text'
              className='code-submit-B'
              placeholder='Enter the Code'
              value={codeValue}
              onChange={handleInputChange}
            />
            <button type="button" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}

      <div className='Details-B'>
        <h3 className='h3-details-B'>Courses Offered</h3>
      </div>

      <div className='scroll-details-B'></div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomeIntervieweeWithModal;
