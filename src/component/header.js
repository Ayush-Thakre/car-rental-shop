// Header.js or App.js
import { NavLink } from 'react-router-dom';
import logoimg from '../img/jeep.png'

function Header(){
  
  return (


    <header className='navbar'>

<NavLink to="#" className="logo"> <img src={logoimg} alt=""/></NavLink>

<div class='bx bx-menu' id="menu-icon"/>

      <NavLink to={'/Home'} className="nav-link">
  Home
</NavLink>
<NavLink to={'/purchase'} className="nav-link">
  Purchase
</NavLink>
<NavLink to={'/about'} className="nav-link">
  About
</NavLink>
{/* <NavLink to={'/services'} className="nav-link">
  Services
</NavLink> */}
<NavLink to={'/reviews'} className="nav-link">
  Reviews
</NavLink>
<NavLink to={'/approach'} className="nav-link">
  Approach Us
</NavLink>


      <div class="header-btn">
            <NavLink to="#" className="sign-up">Sign Up</NavLink>
            <NavLink to="#" className="sign-in">Sign In</NavLink>
        </div>

    </header>
  );
};

export default Header;
