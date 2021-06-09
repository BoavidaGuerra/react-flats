import React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import FlatMarker from './FlatMarker';
// import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({ accessToken: "pk.eyJ1IjoibWFkYWxlbmFnIiwiYSI6ImNrZ20yYzB4cTFuamwydHRlaXZiajEzZTMifQ.e4JeBXRQv5VLiF0oBqIfcA" });

export default function FlatMap({ flats }) {
  return (
    <div className="map-container">
      <Map
        // eslint-disable-next-line react/style-prop-object
        style="mapbox://styles/mapbox/streets-v9"
        zoom={[14]}
        center={[2.3522, 48.8566]}
        containerStyle={{ height: '100vh', width: '100%' }}
      >
        {flats.map(flat => (
          <Marker
            key={flat.id}
            coordinates={[flat.lng, flat.lat]}
            anchor="bottom"
          >
            <FlatMarker price={flat.price} />
          </Marker>
        ))}
      </Map>
    </div>
  );
}
