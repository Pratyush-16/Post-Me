import React from "react";
import "../Header/Header.css";
import LandingPage from "../../Pages/LandingPage/LandingPage";

export default function Header() {
  return (
   
      <div className="header-container">
        <h1 className="title">Socials</h1>

        <div class="search-container">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            class="search-input"
          />
          <button class="search-btn">Search</button>
        </div>



          {/* <div className='landing-conatainer'>
           <LandingPage/>
           </div> */}
      </div>



    
  );
}
