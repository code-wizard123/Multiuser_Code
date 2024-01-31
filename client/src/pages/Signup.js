import React, { useState } from 'react'
import '../css/Signup.css'
import axios from 'axios'

const Signup = () => {
  const [interviewer, setInterviewer] = useState(true)
  const [error, setError] = useState("");
  const [details, setDetails] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    await axios.post("/auth/register", {
      email: details.email,
      password: details.password,
      role: interviewer ? "interviewer" : "interviewee"
    })
      .then(async (res) => {
        const data = await res.data;
        console.log(data);
      }).catch((err) => {
        setError(err.response.data.errors.email + err.response.data.errors.password);
      });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value
    })
  }

  return (
    <div className='outer-main-div-signup'>
      {/* <div className='navbar'></div> */}
      <div className='inner-main-div-signup'>
        <div className='mid-signup'>
          <form>
            <div className='midhead-signup'>
              <h3 className='midtext-signup'>{interviewer ? "Interviewer" : "Interviewee"}</h3>
            </div>
            {error}
            <div className='midinput-signup'>
              <div className='leftfloat-signup'>
                <p className='leftfloattext-signup'>Email</p>
                <input type='text' name="email" onChange={(e) => handleChange(e)} className='leftfloatinput-signup' placeholder='Set a Username'></input>
              </div>
              <div className='leftfloat-signup'>
                <p className='leftfloattext-signup'>Password</p>
                <input type='password' name="password" className='leftfloatinput-signup' onChange={(e) => handleChange(e)} placeholder='Set a Password'></input>
              </div>
            </div>
            <br></br>
            <div className='switch-signup'>
              <div className="switch-container">
                <input type="checkbox" id="toggle-switch" onClick={() => setInterviewer(!interviewer)}></input>
                <label className="switch-signup" htmlFor="toggle-switch"></label>
              </div>
              <p className='switch-txt-left-signup'>Switch to {!interviewer ? "Interviewer" : "Interviewee"} Sign-in</p>
            </div>

            <div>
              <br></br>
              <div className='paddbutton-signup'>
                <button type="reset" onClick={handleSubmit}>Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup