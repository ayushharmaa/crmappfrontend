import React  from 'react';
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import './Home.css';





const Homepage = () => {


    const { loginWithRedirect , isAuthenticated } = useAuth0();
    const { logout,  user } = useAuth0();
    return (
        <div className='content'>
        <h1>PLEASE LOGIN TO CONTINUE⬇️</h1>
        <h2>CRM APP</h2>
        
            {isAuthenticated &&  <li> <h1 className='header'>Hello!!!</h1> <h2>{user.name}</h2>
        </li>}
        <br/>
        {  
             isAuthenticated ? (<li> <button type='submit' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
      <br/>
    </button>


<button type='submit '> <Link to={'/customers'}>Click to view Customers list </Link></button>

    </li>
    
    
      ):(
        
        <button onClick={() => loginWithRedirect()}>Log In</button>

       

    )}
       
        <br/>
        <br/>
        </div>
    )
  }
  
  export default Homepage