import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
// import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({ accessToken: "pk.eyJ1IjoibWFkYWxlbmFnIiwiYSI6ImNrZ20yYzB4cTFuamwydHRlaXZiajEzZTMifQ.e4JeBXRQv5VLiF0oBqIfcA" });

export default function FlatMap() {
  return (
    <div className="map-container">
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        zoom={[14]}
        center={[2.3522, 48.8566]}
        containerStyle={{ height: '100vh', width: '100%' }}
      />
    </div>
  );
}
