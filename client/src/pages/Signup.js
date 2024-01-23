import React from 'react'
import '../css/Signup.css'
const Signup = () => {
  return (
    <div className='outer-main-div-signup'>
    {/* <div className='navbar'></div> */}
    <div className='inner-main-div-signup'>
      <div className='mid-signup'>
        <form>
          <div className='midhead-signup'>
            <h3 className='midtext-signup'>Interviewer</h3>
          </div>
          <div className='midinput-signup'>
            <div className='leftfloat-signup'>
              <p className='leftfloattext-signup'>Email</p>
              <input type='text' className='leftfloatinput-signup' placeholder='Set a Username'></input>
            </div>
            <div className='leftfloat-signup'>
              <p className='leftfloattext-signup'>Password</p>
              <input type='password' className='leftfloatinput-signup' placeholder='Set a Password'></input>
            </div>
          </div>
          <br></br>
          <div className='switch-signup'>
            <div class="switch-container">
              <input type="checkbox" id="toggle-switch"></input>
              <label class="switch-signup" for="toggle-switch"></label>
            </div>
            <p className='switch-txt-left-signup'>Switch to Interviewee Sign-in</p>
          </div>

          <div>
            <br></br>
            <div className='paddbutton-signup'>
              <button type="reset" onclick="location.href='http:/Html/Storepage.html'">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Signup