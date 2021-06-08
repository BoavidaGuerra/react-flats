import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/extensions
import App from './components/App.jsx';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
