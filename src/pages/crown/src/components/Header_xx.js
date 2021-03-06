import React from 'react';
import { Link } from 'react-router-dom';
import './Header_xx.scss';
import { ReactComponent as Logo } from '../assets/crown.svg';

const Header_xx = () => {
  return (
    <div>
      <div className="header">
        <Link to="/Crown" className="logo-container">
          <Logo />
        </Link>
        <div className="options">
          <Link to="/Crown/api_xx/shop_xx" className="option">
            Shop
          </Link>
          <Link to="/Crown/contact_xx" className="option">
            Contact
          </Link>
          <Link to="/Crown/signin_xx" className="option">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header_xx;
