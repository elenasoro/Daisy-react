const css = require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createStore, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';



// ReactDOM.render(
//   <Provider store={store}>
//     <WrappedMainComponent />
//   </Provider>,
//   document.querySelector('.first')
// );

ReactDOM.render(
  <App />,
  document.querySelector('.root')
);


