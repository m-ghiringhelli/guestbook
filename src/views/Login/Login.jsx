import React, { useState } from 'react';
import style from './Login.css';

export default function Login() {
  const [authType, setAuthType] = useState('signin');

  return (
    <>
      {authType === 'signin' ? (
        <>
          <p>Sign into your account</p>
          <p>Are you new around here? 
            <span onClick={() => setAuthType('signup')}> Click here to create an account</span>
          </p>
        </>
      ) : ( 
        <>
          <p>Create an account</p>
          <p>Not your first rodeo?
            <span onClick={() => setAuthType('signin')}> Sign-in to your account</span>
          </p>
        </>
      )}
      <form className={style.authForm}>
        <label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Email address'
          />
        </label>
        <label>
          <input
            id='password'
            name='password'
            type='password'
            placeholder='Password'
          />
        </label>
      </form>
    </>
  )
}
