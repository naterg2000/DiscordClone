import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const styles = {
    loginInfoBox: {
      borderColor: 'red',
      borderWidth: 1,
      height: '70%',
      width: 50,
    }
  }

  const handleEmailValueChange = event => {
    setUserEmail(event.target.value);
    console.log('email is', event.target.value);
  }

  const handlePasswordValueChange = event => {
    setUserPassword(event.target.value);
    console.log('password is', event.target.value);
  }

  // try to log the user in
  function tryLogin() {
    // if login was successful, move to home page
    console.log('checking login info... yay ur clean');
    // present next page
    navigate("/home");
    // else ask to resubmit info

  }

  function handleLoginButtonClicked() {
    // check if the text fields are empty
    if(userEmail === '' && userPassword === '') {
      // ask to enter things
      console.log('Please enter your email and password!');
    }
    else {
      // login
      tryLogin()
    }
  }

  return (
    <div>
      <p>Login</p>
      {/* login info section */}
      <div className='loginInfoBox' style={styles.loginInfoBox}>
        <input 
          placeholder='email'
          onChange={handleEmailValueChange}
          />
        <input 
          placeholder='password'
          onChange={handlePasswordValueChange}  
        />
        <button
          onClick={handleLoginButtonClicked()}
        >this is a button</button>
      </div>
    </div>
  )
}

export default Login