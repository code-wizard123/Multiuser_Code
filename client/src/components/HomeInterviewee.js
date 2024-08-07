import React, { useState } from 'react';
import '../css/Home_Interviewee.css';

const DateRangePicker = ({ startDate, endDate, handleStartDateChange, handleEndDateChange }) => {
  return (
    <div className='start-end-pad'>
      <label htmlFor="startDate">Start Date:</label>
      <input
        className='start-end'
        type="date"
        id="startDate"
        value={startDate}
        onChange={handleStartDateChange}
      />
      <br></br>
      <label htmlFor="endDate">End Date:</label>
      <input
        className='start-end'
        type="date"
        id="endDate"
        value={endDate}
        onChange={handleEndDateChange}
        min={startDate} // Set min attribute to start date to prevent selecting earlier dates
      />
    </div>
  );
};



const HomeIntervieweeWithModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [codeValue, setCodeValue] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleInputChange = (e) => {
    setCodeValue(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Submitted code:', codeValue);
    console.log('Selected option:', selectedOption);
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
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              handleStartDateChange={handleStartDateChange}
              handleEndDateChange={handleEndDateChange}
            />
            <br></br>
            <label htmlFor="dropdown">Select Time-Span:</label>

            <select className='select-range' id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
              <option value="">Range</option>
              <option value="Option 1">8am-11am</option>
              <option value="Option 2">2pm-5pm</option>
              <option value="Option 3">8pm-11pm</option>
            </select>
            <button className="send-req" type="button" onClick={handleSubmit}>Send Request</button>
          </div>
        </div>
      )}

      <div className='Details-B'>
        <h3 className='h3-details-B'>Courses Offered</h3>
      </div>

      <div className='scroll-details-B'>
        <div className='course-card'>
          <div className='img-png'><img src='C-bg.png' style={{ width: '100%' }}></img>

          </div>

          <div>
            <h2>Java Programming Masterclass</h2>
          </div>
          <div>
            <p>Take your Java skills to the next level with this masterclass.</p>
          </div>
          <div>
            <h2>Price : 3999</h2>
          </div>
          <div>
          <button className="buy" type="button" >buy</button>
          </div>
        </div>
        <div className='course-card'>
          <div className='img-png'><img src='B-bg.png' style={{ width: '100%' }}></img>

          </div>

          <div>
            <h2>Python for Beginners</h2>
          </div>
          <div>
            <p>A beginner-friendly course to learn Python programming.</p>
          </div>
          <div>
            <h2>Price : 2999 Rs</h2>
          </div>
          <div>
          <button className="buy" type="button" >buy</button>
          </div>
        </div>

  <div className='course-card'>
          <div className='img-png'><img src='C-bg.png' style={{ width: '100%' }}></img>

          </div>

          <div>
            <h2>JavaScript Fundamentals</h2>
          </div>
          <div>
            <p>Learn the basics of JavaScript programming language.</p>
          </div>
          <div>
            <h2>Price : 2199 Rs</h2>
          </div>
          <div>
          <button className="buy" type="button" >buy</button>
          </div>
          
        </div>

      </div>
      <div className='scroll-details-B'>
        <div className='course-card'>
          <div className='img-png'><img src='C-bg.png' style={{ width: '100%' }}></img>

          </div>

          <div>
            <h2>Java Programming Masterclass</h2>
          </div>
          <div>
            <p>Take your Java skills to the next level with this masterclass.</p>
          </div>
          <div>
            <h2>Price : 3999</h2>
          </div>
          <div>
          <button className="buy" type="button" >buy</button>
          </div>
        </div>
        <div className='course-card'>
          <div className='img-png'><img src='B-bg.png' style={{ width: '100%' }}></img>

          </div>

          <div>
            <h2>Python for Beginners</h2>
          </div>
          <div>
            <p>A beginner-friendly course to learn Python programming.</p>
          </div>
          <div>
            <h2>Price : 2999 Rs</h2>
          </div>
          <div>
          <button className="buy" type="button" >buy</button>
          </div>
        </div>

  <div className='course-card'>
          <div className='img-png'><img src='C-bg.png' style={{ width: '100%' }}></img>

          </div>

          <div>
            <h2>JavaScript Fundamentals</h2>
          </div>
          <div>
            <p>Learn the basics of JavaScript programming language.</p>
          </div>
          <div>
            <h2>Price : 2199 Rs</h2>
          </div>
          <div>
          <button className="buy" type="button" >buy</button>
          </div>
          
        </div>

      </div>
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
