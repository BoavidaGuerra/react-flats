import React from 'react';
import Flat from './Flat';

export default function FlatsList({ flats }) {
  console.log(flats);

  return (
    <div className="flat-list">
      {flats.map(flat => (
        <Flat key={flat.id} title={flat.name} image={flat.imageUrl} price={flat.price} priceCurr={flat.priceCurrency} />
        // <div className="card" key={flat.id}>{flat.name}</div>
      ))}
    </div>
  );
}
