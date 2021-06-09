import React from 'react';

export default function FlatMarker({ price, selected }) {
  const classes = selected ? "marker selected" : "marker";
  return (
    <div className={classes}>
      {price}
    </div>
  );
}
