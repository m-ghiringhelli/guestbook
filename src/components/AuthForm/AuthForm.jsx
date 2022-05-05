import React from 'react'

export default function AuthForm() {
  return (
    <>
      <form>
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
