import React from 'react';
// import image from '../images/2024644_login_user_avatar_person_users_icon.png';
export default function Login() {
  return (
    <div>
      <div className='imgContainer'>
        <img className='avatar' alt='Avatar'></img>
      </div>
      <div className='container'>
        <label for='username'>Username</label>
        <input type='text' placeholder='Enter Username' name='username'></input>
        <label for='password'>Password</label>
        <input type='text' placeholder='Enter Password' name='password'></input>
        <button type='submit'>Login</button>
      </div>
      <div>
        <label>
          <input type='checkbox' checked='checked' name='remember'></input>{' '}
          Remember me
        </label>
      </div>
      <div>
        <button type='button'>Cancel</button>
        <span className='password'>
          Forgot <a href='#'>password?</a>
        </span>
      </div>
    </div>
  );
}
