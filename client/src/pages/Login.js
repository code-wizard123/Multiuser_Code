import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Login.css'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
  const [interviewer, setInterviewer] = useState(true)
  const [error, setError] = useState("")
  const [details, setDetails] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    await axios.post("/auth/login", {
      email: details.email,
      password: details.password,
    })
      .then(async (res) => {
        if (res.status === 200) {
          const data = await res.data;

          //Create a Crumb to display to User


          //Redirect to Home Page
          navigate("/");
        }
      }).catch((err) => {
        setError(err.response.data.error);
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
    <div className='outer-main-div'>
<ul className='ul'>
  <li className='li'><a class="active" href=""><span style={{color: "#4707ff"}}>Login</span></a></li>
  <li className='li'><a href="#news">Sign Up</a></li>
</ul>
      <div className='inner-main-div'>
        <div className='mid'>
          <form>
            <div className='midhead'>
              <h3 className='midtext'>{interviewer ? "Interviewer" : "Interviewee"}</h3>
            </div>
            {error}
            <div className='midinput'>
              <div className='leftfloat'>
                <p className='leftfloattext'>Email</p>
                <input type='email' name="email" className='leftfloatinput' onChange={(e) => handleChange(e)} placeholder='Enter your Email'></input>
              </div>
              <div className='leftfloat'>
                <p className='leftfloattext'>Password</p>
                <input type='password' name="password" className='leftfloatinput' onChange={(e) => handleChange(e)} placeholder='Enter your Password'></input>
              </div>
            </div>
            <br></br>
            <div className='switch'>
              <div className="switch-container">
                <input type="checkbox" id="toggle-switch" onClick={() => setInterviewer(!interviewer)}></input>
                <label className="switch" htmlFor="toggle-switch"></label>
              </div>
              <p className='switch-txt-left'>Switch to {!interviewer ? "Interviewer" : "Interviewee"} Sign-in</p>
            </div>

            <div>
              <br></br>
              <div className='paddbutton'>
                <button type="reset" onClick={handleSubmit}>Sign In</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login