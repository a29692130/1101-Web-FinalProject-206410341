######Web 程式設計(一) ---- 206410341 吳權恩

###期中 Project 實作過程 -- 建立 Components_Footer.js + Footer.scss

####Step1. 在 components 目錄底下，新增 Footer.js

建立框架，將 theme 中 Footer 的 \<div> 區域貼上，再把 class 更改為 className，import Footer.scss。

Code:

```
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="ft-folder hidden-xs"></div>
        <div className="row ft-wrapper mb40">
          <div className="col-md-offset-0  col-sm-offset-0  text-center">
            <a href="/Info/Faq" className="ft-link">
              常見問題
            </a>
            <a href="/Info/Terms" className="ft-link">
              購物須知
            </a>
            <a href="/Info/Privacy" className="ft-link">
              隱私權政策
            </a>
          </div>
          <div className="col-sm-offset-1 col-sm-10 col-xs-12 text-center ft-copyright mb20">
            <p>
              客服信箱：shop@tvbs.com.tw
              <br />
              服務時間：週一至週五 10:00~17:00（不含例假日）
              <br />© TVBS Media Inc. All Rights Reserved.
              台北市內湖區瑞光路451號 | 聯利媒體股份有限公司
            </p>
          </div>
        </div>
      </div>
      <a
        href="#0"
        className="tvbs-customized cd-top cd-is-visible cd-fade-out"
      ></a>
    </div>
  );
};
export default Footer;

```

####Step2. 新增 Footer.scss

```
.footer-container {
  background-color: #ffffff;
  padding-top: 40px;
  padding-bottom: 40px;
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .ft-folder {
    color: #666;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .ft-folder::after {
    content: '';
    display: table;
    clear: both;
  }

  .hidden-xs {
    display: none !important;
  }

  .row {
    margin-right: -15px;
    margin-left: -15px;
  }

  .text-center {
    text-align: center;
  }
  .footer-container {
    background-color: #ffffff;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media screen and (max-width: 991px) {
    .ft-folder {
      padding-left: 8.33333%;
      padding-right: 8.33333%;
    }
  }

  @media screen and (max-width: 767px) {
    .ft-folder {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .ft-folder h4 {
    font-size: 1em;
    margin: 0 auto 20px;
    border-right: 1px solid #ccc;
  }

  @media screen and (max-width: 1199px) {
    .ft-folder h4 {
      font-size: 1em;
    }
  }

  .ft-folder h4.no-border {
    border-right: 0;
  }

  .ft-folder a {
    color: #666;
    font-size: 0.8em;
    margin-bottom: 10px;
    display: block;
    text-decoration: none;
    cursor: pointer;
  }

  .ft-folder__block {
    padding-left: 12px;
    padding-right: 12px;
    width: 16.66667%;
    min-height: 170px;
    /*flex-basis: percentage(2/12);*/
    margin-bottom: 40px;
  }

  @media screen and (max-width: 991px) {
    .ft-folder__block {
      width: 33.33333%;
      /*flex-basis: percentage(4/12);*/
    }
  }

  .ft-wrapper {
    color: #666;
  }

  .ft-wrapper a {
    text-decoration: none;
    cursor: pointer;
  }

  .ft-link {
    display: inline-block;
    padding-right: 10px;
    padding-left: 10px;
    margin-bottom: 10px;
    margin-right: 0;
    color: #666;
    border-right: 1px solid #ccc;
  }

  .ft-link:hover,
  .ft-link:focus {
    color: #666;
  }

  .ft-link:last-child {
    border-right: 0;
  }

  @media screen and (max-width: 991px) {
    .ft-link {
      border-right: 0;
    }
  }

  .ft-copyright {
    color: #999;
    font-size: 0.82em;
    margin-bottom: 0;
  }

  /* margin-top 10~100 */
  .mt10 {
    margin-top: 10px;
  }

  .mt20 {
    margin-top: 20px;
  }

  .mt30 {
    margin-top: 30px;
  }

  .mt40 {
    margin-top: 40px;
  }

  .mt40 img {
    max-width: 100%;
  }
  .mt50 {
    margin-top: 50px;
  }
  .mt60 {
    margin-top: 60px;
  }

  .mt70 {
    margin-top: 70px;
  }

  .mt80 {
    margin-top: 80px;
  }

  .mt90 {
    margin-top: 90px;
  }

  .mt100 {
    margin-top: 100px;
  }

  /* margin-bottom 10~100 */
  .mb10 {
    margin-bottom: 10px;
  }

  .mb20 {
    margin-bottom: 20px;
  }

  .mb30 {
    margin-bottom: 30px;
  }

  .mb40 {
    margin-bottom: 40px;
  }

  .mb50 {
    margin-bottom: 50px;
  }

  .mb60 {
    margin-bottom: 60px;
  }

  .mb70 {
    margin-bottom: 70px;
  }

  .mb80 {
    margin-bottom: 80px;
  }

  .mb90 {
    margin-bottom: 90px;
  }

  .mb100 {
    margin-bottom: 100px;
  }

  .mg-0 {
    margin: 0;
  }

  .pd-0 {
    padding: 0;
  }

  .cd-top {
    display: inline-block;
    position: fixed;
    bottom: 40px;
    right: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: #fd8e54
      url(https://supertaste-shop.tvbs.com.tw/Images/F2E/img/gototop2.png)
      no-repeat center 50%;
    border-radius: 30px;
  }

  .cd-is-visible {
    visibility: visible;
    opacity: 1;
    z-index: 10;
  }
  .cd-fade-out {
    /* opacity: .5; */
  }

  .cd-top .cd-top .col-xs-12 {
    width: 100%;
    float: left;
  }
}

```

####Step3. 步驟 1~2 結合後完成的樣子
![完成Footer](https://i.imgur.com/tOUJVpF.png)

與要複製的網頁對比
![對比照](https://i.imgur.com/IVi5QX9.png)
