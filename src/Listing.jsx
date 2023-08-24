import React from 'react';

const Listing = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
                {item.MainImage && item.MainImage.url_570xN &&(
              <img src={item.MainImage.url_570xN} alt={item.title} /> )}
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">
              {item.title && item.title.length > 50 ? `${item.title.slice(0, 50)}…` : item.title}
            </p>
            <p className="item-price">
              {item.currency_code === 'USD' ? '$' :
               item.currency_code === 'EUR' ? '€' :
               `${item.currency_code} `}
              {item.price}
            </p>
            <p className={`item-quantity ${item.quantity <= 10 ? 'level-low' : item.quantity <= 20 ? 'level-medium' : 'level-high'}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
