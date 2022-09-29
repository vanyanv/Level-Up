import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <div className='navbar'>
        <Link to='/'>
          <h1>Level Up</h1>
        </Link>
      </div>
    </header>
  );
}
