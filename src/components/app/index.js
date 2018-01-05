import React, { Component } from 'react'
import './index.css'
import Main from '../main'
import Header from '../ui/header'
import Sidebar from '../ui/sidebar'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header key="header" />
        <Main key="main" />
        <Sidebar key="sidebar" />
      </div>
    )
  }
}

export default App
