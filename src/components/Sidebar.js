import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-content'>
        <div className='user'>
          <p>Merhaba Kullanıcı</p>
        </div>
        <nav className='links'>  
          <ul>
            <li>
              <NavLink to="/">
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <span>Yeni Proje</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>  
  )
}
