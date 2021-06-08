import React from 'react';
// import flats from '../../data/flats';
import fetchFlats from './fetchFlats';
import FlatList from './FlatList';
import FlatMap from './FlatMap';
import '../../assets/stylesheets/application.scss';


export default function App() {
  const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';
  const { flats } = fetchFlats(url);
  // const [flats, setFlats] = useState([]);

  console.log(flats);
  return (
    <div>
      <FlatList flats={flats} />
      <FlatMap />
    </div>
  );
}
