import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import all from './reducers/index'

import App from './App'

ReactDOM.render(
  <Provider store={createStore(all)}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
