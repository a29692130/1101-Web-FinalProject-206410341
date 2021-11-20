import React from 'react';
import './Swiper.scss';

const Swiper = () => {
  return (
    <div>
      <section className="swiper-container swiper-container__full swiper-container-horizontal">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
            data-swiper-slide-index="4"
          >
            <a
              href="https://is.gd/5c652o"
              target="_blank"
              src="https://supertaste-shop.tvbs.com.tw/Files/home/image/Home_1840514000.jpg"
            >
              <img src="https://supertaste-shop.tvbs.com.tw/Files/home/image/Home_1840514000.jpg" />
            </a>
          </div>
          <div
            className="swiper-slide swiper-slide-active"
            data-swiper-slide-index="0"
          >
            <a
              href="https://bit.ly/3mFzCfl"
              target="_blank"
              src="https://supertaste-shop.tvbs.com.tw/Files/home/image/Home_1111491210.jpg"
            >
              <img src="https://supertaste-shop.tvbs.com.tw/Files/home/image/Home_1111491210.jpg" />
            </a>
          </div>
          <div
            className="swiper-slide swiper-slide-next"
            data-swiper-slide-index="1"
          >
            <a
              href="https://bit.ly/3F0FoR6"
              target="_blank"
              src="https://supertaste-shop.tvbs.com.tw/Files/home/image/Home_1026521160.jpg"
            >
              <img src="https://supertaste-shop.tvbs.com.tw/Files/home/image/Home_1026521160.jpg" />
            </a>
          </div>
          <div className="swiper-slide" data-swiper-slide-index="2">
            <a
              href="https://supertaste-shop.tvbs.com.tw/Product/CategoryF/786"
              target="_blank"
              src="https://supertaste-shop.tvbs.com.tw/Files/home/image/Home_1026523041.jpg"
            >
              <img src="https://supertaste-shop.tvbs.com.tw/Files/home/image/Home_1026523041.jpg" />
            </a>
          </div>
          <div className="swiper-slide" data-swiper-slide-index="3">
            <a
              href="https://bit.ly/3h6wQh4"
              target="_blank"
              src="https://supertaste-shop.tvbs.com.tw/Files/home/image/Home_1026524142.jpg"
            >
              <img src="https://supertaste-shop.tvbs.com.tw/Files/home/image/Home_1026524142.jpg" />
            </a>
          </div>
          <div
            className="swiper-slide swiper-slide-duplicate-prev"
            data-swiper-slide-index="4"
          >
            <a
              href="https://is.gd/5c652o"
              target="_blank"
              src="https://supertaste-shop.tvbs.com.tw/Files/home/image/Home_1840514000.jpg"
            >
              <img src="https://supertaste-shop.tvbs.com.tw/Files/home/image/Home_1840514000.jpg" />
            </a>
          </div>
          <div
            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
            data-swiper-slide-index="0"
          >
            <a
              href="https://bit.ly/3mFzCfl"
              target="_blank"
              src="https://supertaste-shop.tvbs.com.tw/Files/home/image/Home_1111491210.jpg"
            >
              <img src="https://supertaste-shop.tvbs.com.tw/Files/home/image/Home_1111491210.jpg" />
            </a>
          </div>
        </div>
        <div className="swiper-pagination sp1 swiper-pagination-clickable swiper-pagination-bullets">
          <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
          <span className="swiper-pagination-bullet"></span>
          <span className="swiper-pagination-bullet"></span>
          <span className="swiper-pagination-bullet"></span>
          <span className="swiper-pagination-bullet"></span>
        </div>
      </section>
    </div>
  );
};

export default Swiper;
/*
  <div
    className="swiper-wrapper"
    style="width: 1px; min-width: 100%; transform: translate3d(-2648px, 0px, 0px); transition-duration: 0ms;"
  >
*/
/*
style="width: 662px;"
*/
