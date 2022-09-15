import React from 'react'
import eye from './eye-off.png';

export default function SignUp() {
  return (
    <div className='signup'>

      <form>
        {/* title */}
        <div className='signup-headline'>
          <p className='signup-title'>Sign up</p>
          <p className='signup-sub-title'>Discover our products and features</p>
        </div>

        {/* name */}
        <div className='signup-inputs'>
          <label>What’s your name?</label> <br/>
          <div className='signup-name'>
            <input className='input-name'
              type="text"
              placeholder='First name'
            />
            <input className='input-name'
              type="text"
              placeholder='Last name'
            />
          </div>
        </div>

        {/* email */}
        <div className='signup-inputs'>
          <span className='signup-email'>
          <label>What's your email address?</label>
          <label className='signup-phone'>Sign up with phone</label>
          </span>
          <input className='input-email'
            type="email"
            placeholder='Email address'
          />
        </div>

        {/* select - dropdown - birthday */}
        <div className='signup-inputs'>
          <label>When’s your birthday?</label> <br/>
          <div className='signup-birthday'>
            <select className='input-birthday'>
                <option>Day</option>
            </select>
            <select>
                <option>Month</option>
            </select>
            <select>
                <option>Year</option>
            </select>
          </div>
        </div>

        {/* password */}
        <div className='signup-inputs signup-password'>
          <label>Your password</label> <br/>
          <input className='input-password'
            type="password"
            placeholder='Password'
          />
          <img className='eye' src={eye} alt="eye" />
        </div>

        {/* checkbox */}
        <div className='signup-inputs'>
          <div className='signup-checkbox'>
          <input className='input-checkbox'
            type="checkbox"
          />
         <label className='checkbox-description'>Get the latest content, newsletters, promotions, recommendations, and <br/>
          account updates sent to your email.</label>
          </div>
        </div>

        {/* button */}
        <button>Submit</button>      

        {/* terms and condition */}
        <p className='signup-terms-and-condition'>By continuing, you agree to Test’s Terms of Service and confirm that <br/>
        you have read the Test’s Privacy Policy.</p>

        <hr className='line'/>

        {/* Already have an account? */}
        <footer>Already have an account? <span>Sign in</span></footer>
        
      </form>
    </div>
  )
}
