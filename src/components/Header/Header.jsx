import React from 'react'
import style from './Header.css'
import { signOutUser } from '../../services/user';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {
  const auth = useAuth();
  auth.user && console.log(auth.user);

  return (
    <div className={style.header}>
      <div>
        <h1>bestBook</h1>
        <p>the best guestbook</p>
      </div>
      <div>
        {auth.user && (
          <>
            <p>{auth.user}</p>
            <button onClick={signOutUser}>Sign-out</button>
          </>
       )}
      </div>
    </div>
  )
}
