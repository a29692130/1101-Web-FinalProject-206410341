import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div>
      <div className="tvbs-customized top-padding"></div>
      <div className="tvbs-customized">
        <div className="header">
          <div className="scrollmenu">
            <Link
              id="0"
              to="/"
              target=""
              className="nav-dropdown-toggle actived"
            >
              購物首頁
            </Link>
            <Link
              id="1"
              to="/Product/CategoryL/42?menucat=1"
              target=""
              className="nav-dropdown-toggle"
            >
              生鮮蔬果
            </Link>
            <Link
              id="2"
              to="/Product/CategoryL/24?menucat=2"
              target=""
              className="nav-dropdown-toggle"
            >
              低溫
            </Link>
            <Link
              id="3"
              to="/Product/CategoryL/28?menucat=3"
              target=""
              className="nav-dropdown-toggle"
            >
              TV激推
            </Link>
            <Link
              id="4"
              to="/Product/CategoryL/25?menucat=4"
              target=""
              className="nav-dropdown-toggle"
            >
              小吃
            </Link>
            <Link
              id="5"
              to="/Product/CategoryL/26?menucat=5"
              target=""
              className="nav-dropdown-toggle"
            >
              零食
            </Link>
            <Link
              id="6"
              to="/Product/CategoryL/31?menucat=6"
              target=""
              className="nav-dropdown-toggle"
            >
              甜點
            </Link>
            <Link id="7" to="/Crown" target="" className="nav-dropdown-toggle">
              Crown
            </Link>
            <Link id="8" to="/Menu" target="" className="nav-dropdown-toggle">
              Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
