import React from 'react';
import { Provider } from 'react-redux';
import Reddit from './components/Reddit';
import './App.css';

const App = ({store}) => (
  <Provider store={store}>
    <Reddit />
  </Provider>
);


export default App;