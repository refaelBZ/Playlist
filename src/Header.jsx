import React from 'react'
import './style.css';
import Search from './Search';
import { NavLink } from 'react-router-dom';


export default function Header({ handleSearch }) {

  return (
    <div className='header'>
      <div className='logo'>
        MyPlay
      </div>
      <div className='search'>
        <Search handleSearch={handleSearch} />
      </div>
      
      <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
        Home</NavLink>
        
      <NavLink to="/liked" className={({ isActive }) => (isActive ? "active" : "")}>
        Liked</NavLink>

        <NavLink to="/Profile" className={({ isActive }) => (isActive ? "active" : "")}>
        Profile</NavLink>
    </div>
  )
}
