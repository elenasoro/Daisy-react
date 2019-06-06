import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './app';
import rootReducer from './store/reducers/rootReducer';

require('./app.scss');

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.dispatch({
  type: 'ACTION_CHANGE_USERS_LIST',
  payload: [],
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.root'),
);
