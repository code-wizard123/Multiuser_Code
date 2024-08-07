import React from 'react'
import '../css/Signup_B.css'
const Signup_B = () => {
    return (
        <div className='outer-main-div-signup-B'>
            <ul className='ul'>
                <li className='li'><a class="active" href="">Login</a></li>
                <li className='li'><a href="#news"><span style={{ color: "#4707ff" }}>Sign Up</span></a></li>
            </ul>
            <div className='inner-main-div-signup-B'>
                <div className='mid-signup-B'>
                    <form>
                        <div className='midhead-signup-B'>
                            <h3 className='midtext-signup-B'>Interviewee</h3>
                        </div>
                        <div className='midinput-signup-B'>
                            <div className='leftfloat-signup-B'>
                                <p className='leftfloattext-signup-B'>Email</p>
                                <input type='text' className='leftfloatinput-signup-B' placeholder='Set a Username'></input>
                            </div>
                            <div className='leftfloat-signup-B'>
                                <p className='leftfloattext-signup-B'>Password</p>
                                <input type='password' className='leftfloatinput-signup-B' placeholder='Set a Password'></input>
                            </div>
                        </div>
                        <br></br>
                        <div className='switch-signup-B'>
                            <div class="switch-container-B">
                                <input type="checkbox" id="toggle-switch"></input>
                                <label class="switch-signup" for="toggle-switch"></label>
                            </div>
                            <p className='switch-txt-left-signup-B'>Switch to Interviewer Sign-up</p>
                        </div>

                        <div>
                            <br></br>
                            <div className='paddbutton-signup-B'>
                                <button type="reset" onclick="location.href='http:/Html/Storepage.html'">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup_B