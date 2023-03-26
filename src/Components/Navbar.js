import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='container'>
      <div className='logo'>
        <h1>Matthew</h1>
      </div>
      <div className='nav'>
        <ul>
          <li>
            <a href='/About'>About</a>
          </li>
          <li>
            <a href='/Resume'>Resume</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
