import { useState, useEffect } from 'react';

export default function fetchFlats(url) {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setFlats(data));
  }, []);
  return { flats };
}
