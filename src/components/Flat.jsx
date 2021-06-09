import React from 'react';


export default function Flat({
  id,
  title,
  image,
  price,
  priceCurr,
  onSelect
}) {
  const handleClick = () => {
    onSelect(id);
  };

  const handleKeyPress = () => {
    onSelect(id);
  };
  return (
    <div
      className="card"
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      tabIndex="0"
      role="button"
    >
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
