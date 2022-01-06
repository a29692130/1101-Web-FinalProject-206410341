######Web 程式設計(一) ---- 206410341 吳權恩

###期中 Project 實作過程 -- 建立 Components_Header.js + Header.scss

####Step1. 在 components 目錄底下，新增 Header.js

建立框架

1. 將 theme 中 Header 的 \<div> 區域貼上
2. 再把 class 更改為 className
3. \<a href="/"> 更改為\<Link to="/">
4. import Header.scss。

Code:

```
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

```

####Step2. 新增 Header.scss

Code:

```
.top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  z-index: 500;
  .box {
    width: 1190px;
    margin: auto;
  }
  .logobox {
    width: 150px;
    margin: 0.5% 0 0.5% 2%;
  }
  .header-logo {
    width: 75%;
    margin: auto;
    float: left;
  }
  .menu2 {
    width: 42%;
    float: right;
    display: inline-flex;
    margin: 1.4% -14% 0 3%;
    position: relative;
  }
  .function-btn {
    display: inline-block;
    color: #666;
    background: none;
    border: 0;
    height: auto;
    width: 60px;
    text-align: center;
    font-size: 0.82em;
    line-height: 1.2;
    padding: 4px;
    margin: 0;
  }
  .visible-xs {
    display: block !important;
  }
  .bt-cart {
    width: 35px;
    height: 35px;
    margin: auto;
    background: url(https://supertaste-shop.tvbs.com.tw/zone2/Images/bt-cart.svg);
  }
  .cart_total {
    width: 20px;
    height: 20px;
    background: #fd8e54;
    padding: 0% 0% 0 0%;
    border-radius: 20px;
    z-index: 2;
    position: absolute;
    left: 31px;
    top: -2px;
    font-size: 11px;
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: none;
  }
  .bt-member {
    width: 35px;
    height: 35px;
    margin: auto;
    background: url(https://supertaste-shop.tvbs.com.tw/zone2/Images/bt-member.svg);
  }
  .login {
  }
  .bt-menu {
    width: 35px;
    height: 35px;
    margin: auto;
    background: url(https://supertaste-shop.tvbs.com.tw/zone2/Images/bt-menu.svg);
  }
  .function-search {
    width: 90px;
    background-color: #666;
  }
  .function-search__input {
    font-size: 0.82em;
    border: 1px solid #b9b9b9;
    background: #fff;
    border-radius: 1px;
    width: 180px;
    height: 36px;
    padding: 2px 35px 2px 10px;
    border-radius: 4px;
    margin: 0px 10px;
    float: left;
  }
  .bt-search {
    width: 35px;
    height: 35px;
    left: 152 px;
    position: relative;
    cursor: pointer;
    background: url(https://supertaste-shop.tvbs.com.tw/zone2/Images/bt-search.svg);
    .function-search__btn {
    }
  }
}

```

####Step3. 步驟 1~2 結合後完成的樣子
![完成Header](https://i.imgur.com/KhsBezT.png)

與要複製的網頁對比
![對比照](https://i.imgur.com/LfREUyL.png)
