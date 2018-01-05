import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import { client } from './lib/apollo'
import { BrowserRouter as Router } from 'react-router-dom'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>, rootEl
);

registerServiceWorker()

if (module.hot) {
  module.hot.accept('./components/app', () => {
    const NextApp = require('./components/app').default
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}
