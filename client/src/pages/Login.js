import React from 'react'
import '../css/Login.css'
const Login = () => {
  return (
    <div className='outer-main-div'>
      {/* <div className='navbar'></div> */}
      <div className='inner-main-div'>
        <div className='mid'>

          <form>
            <div className='midhead'>
              <h3 className='midtext'>Interviewer</h3>
            </div>
            <div className='midinput'>
              <div className='leftfloat'>
                <p className='leftfloattext'>Username</p>
                <input type='text' className='leftfloatinput' placeholder='Enter your Email'></input>
              </div>
              <div className='leftfloat'>
                <p className='leftfloattext'>Password</p>
                <input type='password' className='leftfloatinput'placeholder='Enter your Password'></input>
              </div>
            </div>
            <br></br>
            <div className='switch'>
              <div class="switch-container">
                <input type="checkbox" id="toggle-switch"></input>
                <label class="switch" for="toggle-switch"></label>
              </div>
              <p className='switch-txt-left'>Switch to Interviewee Sign-in</p>
            </div>

            <div>
              <br></br>
              <div className='paddbutton'>
                <button type="reset" onclick="location.href='http:/Html/Storepage.html'">Sign In</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login