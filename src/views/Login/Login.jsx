import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { signInUser, signUpUser } from '../../services/user';
import style from './Login.css';

export default function Login() {
  const [authType, setAuthType] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };
  
  // need to refactor to clear up some duplicate code
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (authType === 'signin') {
        const authedUser = await signInUser({ email, password });
        auth.setUser(authedUser.email);
        history.replace(from);
      } else {
        const authedUser = await signUpUser({ email, password });
        auth.setUser(authedUser.email);
        history.replace(from);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <div className={style.auth}>
      {authType === 'signin' ? (
        <div className={style.authFormHeader}>
          <p>Sign into your account</p>
          <p>Are you new around here? 
            <span onClick={() => setAuthType('signup')}> Click here to create an account</span>
          </p>
        </div>
      ) : ( 
        <div className={style.authFormHeader}>
          <p>Create an account</p>
          <p>Not your first rodeo?
            <span onClick={() => setAuthType('signin')}> Sign-in to your account</span>
          </p>
        </div>
      )}
      <p>{errorMessage}</p>
      <form 
        className={style.authForm}
        onSubmit={(e) => handleSubmit(e)}
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
    </div>
  )
}
