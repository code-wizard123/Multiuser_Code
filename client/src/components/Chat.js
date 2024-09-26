import '../css/Chat.css';
import React, { useState } from 'react';

const Chat = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Add the new input to the messages array
    setMessages([inputValue, ...messages]);
    // Clear the input field after submission
    setInputValue('');
  };

  return (
    <div className='Chat-div'>
      <div className='Chat-display'>
        {/* <div className='Chat-right'>
          <div className='Chat-btn-D'>
            <button><img src='reject.png' alt="Reject"></img></button>
          </div>
        </div> */}
        <div className='Chat-api'>
          <div className='Chat-body'>
            <div className='Chat-head'>
              <p>Chat Window</p>
            </div>
            {/* Output display */}
            <div className='Chat-Messages'>
              {/* Render each input in a new box in reverse order */}
              {messages.slice(0).map((message, index) => (
                <div key={index} className='display-block'>
                  <div className='message-bg'>
                    <p>{message}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='Chat-input-submit'>
              <div className='wid-90'>
                <input
                  className='Chat-input'
                  type="text"
                  id="value"
                  placeholder="Type Here..."
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button className='Chat-btn' onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
