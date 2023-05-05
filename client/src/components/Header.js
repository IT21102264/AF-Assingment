import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <div>
        <img src={logo} alt="Culture Trail Logo" className="App-logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/shop">Blog</Link></li>
          <li><Link to="/shop">Contact</Link></li>
        </ul>
      </nav>
      <div className='iconBtn'>
        <div className="dropdown">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faChevronDown} onClick={handleMenuClick} />
          {showMenu && (
            <ul className="dropdown-menu">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/admin">Account</Link></li>
            </ul>
          )}
        </div>
        <div>
            <Link to={"/Cart"}><FontAwesomeIcon icon={faShoppingCart} /></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;