import React from 'react'
import "../Header/Header.css"

export default function Header() {
  return (
    <div>

        <div className='header-container'>
        <h1 className='title'>Socials</h1>

        <div class="search-container">
           <input type="text" name="search" placeholder="Search..." class="search-input"/>
             <a href="#" class="search-btn">
                <i class="fas fa-search"></i>      
             </a>
        </div>
        
       
        </div>
      
    </div>
  )
}
