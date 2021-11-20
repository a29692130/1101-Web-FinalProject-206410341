import React from 'react';

const ItemContainer = ({ id, name, remoteUrl, price, link }) => {
  return (
    <a key={id} target="_self" className="item" href={link}>
      <img className="lazyc" src={remoteUrl} />
      <div>
        <p className="item-title">{name}</p>
      </div>
      <p className="item-price">{price}</p>
    </a>
  );
};

export default ItemContainer;
