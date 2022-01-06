import React, { useState, useEffect } from 'react';
import data from './swiper-data.js';
import './Swiper.scss';

function Swiper() {
  const [item, setItem] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = item.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, item]);

  useEffect(() => {
    let swiper = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(swiper);
  }, [index]);

  return (
    <>
      <section className="swiper-container">
        <div className="swiper-wrapper">
          {item.map((items, itemsIndex) => {
            const { id, remote_url, target, image } = items;
            let position = 'nextSlide';

            if (itemsIndex === index) {
              position = 'activeSlide';
            }

            if (
              itemsIndex === index - 1 ||
              (index === 0 && itemsIndex === item.length - 1)
            ) {
              position = 'lastSlide';
            }
            return (
              <article key={id} className={position}>
                <a href={remote_url} target={target} src={image}>
                  <img src={image} />
                </a>
              </article>
            );
          })}
        </div>
      </section>
      <div className="swiper-pagination">
        {item.map((items, itemsIndex) => {
          let position = 'swiper-pagination-bullet';

          if (itemsIndex === index) {
            position =
              'swiper-pagination-bullet swiper-pagination-bullet-active';
          }

          if (
            itemsIndex === index - 1 ||
            (index === 0 && itemsIndex === item.length - 1)
          ) {
            position = 'swiper-pagination-bullet';
          }
          return (
            <span
              className={position}
              onClick={() => setIndex(itemsIndex)}
            ></span>
          );
        })}
      </div>
    </>
  );
}

export default Swiper;
