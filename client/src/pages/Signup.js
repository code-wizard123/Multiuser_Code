import React from 'react'
import '../css/Signup.css'
const Signup = () => {
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
              <p className='leftfloattext'>Email</p>
              <input type='text' className='leftfloatinput' placeholder='Set a Username'></input>
            </div>
            <div className='leftfloat'>
              <p className='leftfloattext'>Password</p>
              <input type='password' className='leftfloatinput' placeholder='Set a Password'></input>
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