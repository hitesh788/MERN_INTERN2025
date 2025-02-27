import { Link } from 'react-router-dom'; 
import '../../src/css/Navbar.css'; 
import { useState } from 'react';

const Navbar = ({ isAuthenticated, onLogOut }) => {
  const [dropdown, showDropdown] = useState(false);

  const toggleDropdown = () => {
    showDropdown(!dropdown);
  }

  return (
    <header>
      <nav>
        <ol>
          <li><Link to="/home">Home</Link></li> 
          <li><Link to="/about">About</Link></li> 
          <li><Link to="/gallery">Gallery</Link></li> 
          <li><Link to="/contact">Contact</Link></li> 
          <li><Link to="/use-state">UseState</Link></li>
          <li><Link to="/use-effect">UseEffect</Link></li> 
          <li><Link to="/student">UseContext</Link></li> 

          <div>
            <span onClick={toggleDropdown} onMouseLeave={toggleDropdown}>Hooks</span>
            {dropdown && (
              <ul>
                <li><Link to="https:/ishansingh.com.np">List1</Link></li>
                <li><Link to="https:/hiteshjoshi.com.np">List2</Link></li>
                <li><Link to="">List3</Link></li>
              </ul>
            )}
          </div>
          
          <li><Link to="/signup">Signup</Link></li> 
          <li><Link to="/use-memo">UseMemo</Link></li>
          <li><Link to="/use-ref">UseRef</Link></li>
          <li><Link to="/use-callback">UseCallback</Link></li>
          {isAuthenticated ? (
            <li><Link to="/logout" onClick={onLogOut}>Log Out</Link></li>
          ) : (
            <li><Link to="/">Log Out</Link></li>
          )}
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
