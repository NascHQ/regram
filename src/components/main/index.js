import React, { Component } from 'react'
import Routes from '../../lib/routes'
import logo from './react-graphql-apollo-material.jpg'
import './index.css'

class Main extends Component {

  render() {
    return [
        <img className='logo' alt='ReGrAM logo' src={logo} />,
        <Routes />
    ]
  }
}

export default Main