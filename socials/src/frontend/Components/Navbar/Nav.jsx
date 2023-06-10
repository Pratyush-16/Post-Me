import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <NavLink to="/">Home</NavLink> || 
        <NavLink to='/bookmarks' >Bookmarks</NavLink> || 
        <NavLink to='/login' >Login</NavLink>
      
    </div>
  )
}