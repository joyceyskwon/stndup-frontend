import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker';

// REDUCERS MUST BE PURE FUNCTIONS
const reducer = (state = {count: 86}, action) => {
  console.log('the current state', state)
  console.log('the current action', action);

  switch(action.type) {
    case 'INCREMENT':
      return {count: state.count + action.amount}
    case 'DECREMENT':
      return {count: state.count - 1}
    default:
      return state
  }
}

const store = createStore(reducer)

store.subscribe(() => {
  console.log('the new state is ', store.getState())
  console.log('----------------------')
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
