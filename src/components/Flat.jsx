import React from 'react';

export default function Flat({ title, image, price, priceCurr }) {
  return (
    <div className="card">
      <img src={image} alt="flat" />
      <div className="card-description" title={title}>
        <p>
          {price}
          <span>
            {priceCurr}
          </span>
        </p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
