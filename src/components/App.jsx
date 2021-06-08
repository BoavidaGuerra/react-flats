import React from 'react';
// import flats from '../../data/flats';
import fetchFlats from './fetchFlats';
import FlatsList from './FlatsList';
import '../../assets/stylesheets/application.scss';

export default function App() {
  const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';
  const { flats } = fetchFlats(url);
  // const [flats, setFlats] = useState([]);

  console.log(flats);
  return (
    <FlatsList flats={flats} />
  );
}

// const App = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };
