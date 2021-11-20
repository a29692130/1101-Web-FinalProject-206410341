import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className="top tvbs-customized">
      <div id="header_all" className="box">
        <div className="logobox">
          <Link to="/">
            <img
              className="header-logo"
              src="https://supertaste-shop.tvbs.com.tw/zone2/Images/HOME-Header-Logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="menu2">
          <div className="dropdown function-dropdown hidden-xs">
            <button
              className="function-btn dropdown-toggle function-btn__first"
              type="button"
              aria-haspopup="true"
              aria-expanded="true"
              onclick="RedirectToShoppingCar()"
            >
              <div className="bt-cart"></div>
              <span className="cart_total"></span>
            </button>
          </div>
          <button
            type="button"
            id="bt-member"
            className="function-btn login"
            data-toggle="modal"
            data-target="#loginModal"
          >
            <div className="bt-member"></div>
          </button>

          <input
            type="text"
            name="search"
            id="CHPkeywords"
            className="function-search__input"
            placeholder="找商品"
          />
          <div className="bt-search function-search__btn"></div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
};

export default Header;
