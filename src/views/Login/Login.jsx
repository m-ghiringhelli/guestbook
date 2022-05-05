import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { signInUser, signUpUser } from '../../services/user';
import style from './Login.css';

export default function Login() {
  const [authType, setAuthType] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };

  const handleSubmit = async (e) => {
    e.preventDefault();
    authType === 'signin' ?
      signInUser({ email, password }) :
      signUpUser({ email, password })
    history.replace(from);
  }

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
      <form 
        className={style.authForm}
        onSubmit={handleSubmit}
      >
        <label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            id='password'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  )
}
