import React, { useState } from 'react'
import { useAuth } from '../../../Context/AuthContext';
import { Link,Navigate } from 'react-router-dom';

  export default function Login() { 

        const[loginDetails,setLoginDetails] = useState({username:"",password:""})

       // const { setToken, setCurrentUser } = useAuth();

        const loginFormHandler =(event) => {
            const {name , value} = event.target;
            setLoginDetails({...loginDetails, [name] : value});
        }

        const formSubmit =() => {
            const{ username, password } = loginDetails;
            //npm console.log(username, password);
        }

      return (
        
          <section className='login-container'>

            <h3 className='login-title'>Log In</h3>

            <div className='login-form'>

                <label >UserName<span>*</span></label>
                <input 
                  id="username"
                  placeholder="Enter username"
                  className="username"
                  name="username"
                  value={loginDetails.username}
                  onChange={loginFormHandler}
                  />

                  <label>Password <span>*</span></label>
                  <input 
                  id="password"
                  placeholder="Enter password"
                  className="password"
                  name="password"
                  value={loginDetails.password}
                  onChange={loginFormHandler}
                  />

                  <button className='login-button' onClick={formSubmit}>Login</button>
                  <button>Login As Guest</button>
                  <span className="goto_signUp-text">
                       Don't have an account? <Link to="signUp">Sign Up</Link>
      </span>

            </div>


      
         </section>
  )
}
