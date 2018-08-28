import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './config/store';

const store = configureStore();


ReactDOM.render(<App store={store} />, document.getElementById('root'));
