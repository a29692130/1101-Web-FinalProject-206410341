######Web 程式設計(一) ---- 206410341 吳權恩

###期中 Project 實作過程 -- 建立 Components_Navbar.js + Navbar.scss

####Step1. 在 components 目錄底下，新增 Navbar.js

建立框架

1. 將 theme 中 Navbar 的 \<div> 區域貼上
2. 再把 class 更改為 className
3. \<a href="/"> 更改為\<Link to="/">
4. import Navbar.scss

Code:

```
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
            <Link
              id="7"
              to="/Product/CategoryL/31?menucat=7"
              target=""
              className="nav-dropdown-toggle"
            >
              餐廚
            </Link>
            <Link
              id="8"
              to="/Product/CategoryL/31?menucat=8"
              target=""
              className="nav-dropdown-toggle"
            >
              玩樂生活
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

```

####Step2. 新增 Navbar.scss

Code:

```
.tvbs-customized {
  .header {
    margin-bottom: 1%;
    box-shadow: 0px 5px 5px #eee;
  }
  .scrollmenu {
    overflow: auto;
    white-space: nowrap;
    text-align: center;
    margin: 6px auto;
  }
  .nav-dropdown-toggle {
    display: inline-block;
    color: #636161;
    font-size: 16px;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    cursor: pointer;
  }
  .nav-dropdown-toggle:hover {
    color: #fd8e54;
  }
  .actived {
    color: #fd8e54 !important;
    font-weight: 500;
  }
  .header::after {
    content: '';
    display: table;
    clear: both;
  }
}
.top-padding {
  height: 80.0469px;
}

```

####Step3. 步驟 1~2 結合後完成的樣子
![完成Navbar](https://i.imgur.com/hRPCn3R.png)

與要複製的網頁對比
![對比照](https://i.imgur.com/wRIaG7k.png)
