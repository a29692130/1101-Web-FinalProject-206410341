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
