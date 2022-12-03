import React from 'react'
// import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'


// moo
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'
// moo 


import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
  <Auth0Provider
    domain="atwhatcost.au.auth0.com"
    clientId="QkjBUbnMR7QJXWMXcduqxRsUxroWar9s"
    redirectUri={window.location.origin}
    audience="https://atwhatcost/api"
  >
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
