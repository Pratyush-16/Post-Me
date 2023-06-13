import React from 'react'
import "../Header/Header.css"

export default function Header() {
  return (
    <div>

        <h1>Socials</h1>

        <div class="search-container">
           <input type="text" name="search" placeholder="Search..." class="search-input"/>
             <a href="#" class="search-btn">
                <i class="fas fa-search"></i>      
             </a>
        </div>
        
        <hr/>
      
    </div>
  )
}
