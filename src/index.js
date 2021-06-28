//React
import React from 'react';
import ReactDOM from 'react-dom';
//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers';
//App
import App from './App';
import './index.css';


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


