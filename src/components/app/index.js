import React, { Component } from 'react'
import logo from './react-graphql-apollo-material.jpg'
import './index.css'
import CustomerList from '../customer/list'
import CustomerNew from '../customer/new'
import { ApolloProvider } from 'react-apollo'
import { client } from '../../lib/apollo'

class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Welcome to React GraphqQL Apollo Material Boilerplate</h1>
          </header>
          <p className='App-intro'>
            To get started, edit <code>src/components/app/index.js</code> and save to reload.<br />
            Also, don't forget to change the GraphQL endpoint in <code>src/lib/apollo.js</code>
          </p>
          <div>
            <CustomerNew />
          </div>
          <div>
            <CustomerList />
          </div>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
