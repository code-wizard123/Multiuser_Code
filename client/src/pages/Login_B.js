import React from 'react'
import '../css/Login_B.css'


const Login_B = () => {

  return (
    <div className='outer-main-div-B'>
     <ul className='ul'>
  <li className='li'><a class="active" href="pages/Login.js"><span style={{color: "#4707ff"}}>Login</span></a></li>
  <li className='li'><a href="pages/Signup.js">Sign Up</a></li>
</ul>
      <div className='inner-main-div-B'>
        <div className='mid-B'>

          <form>
            <div className='midhead-B'>
              <h3 className='midtext-B'>Interviewee</h3>
            </div>
            <div className='midinput-B'>
              <div className='leftfloat-B'>
                <p className='leftfloattext-B'>Username</p>
                <input type='text' className='leftfloatinput-B' placeholder='Enter your Email'></input>
              </div>
              <div className='leftfloat-B'>
                <p className='leftfloattext-B'>Password</p>
                <input type='password' className='leftfloatinput-B' placeholder='Enter your Password'></input>
              </div>
            </div>
            <br></br>
            <div className='switch-B'>
              <div class="switch-container-B">
                <input type="checkbox" id="toggle-switch" ></input>
                <label class="switch" for="toggle-switch" onclick='myfunction()'></label>
              </div>
              <p className='switch-txt-left-B'>Switch to Interviewer Sign-in</p>
            </div>

            <div>
              <br></br>
              <div className='paddbutton-B'>
                <button type="reset" onclick="location.href='http:/Html/Storepage.html'">Sign In</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login_B