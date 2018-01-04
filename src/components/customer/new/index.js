import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import TextField from 'material-ui/TextField'
import Save from 'material-ui-icons/Save'
import Button from 'material-ui/Button'
import './index.css'
import { client } from '../../../lib/apollo'
import { ApolloProvider } from 'react-apollo'
import { ADD_ORGANIZATION } from '../graphql'

class CustomerNew extends Component {

  componentDidCatch(error, info) {
      console.log(info.componentStack)
  }

  handleSave() {
      console.log(this.state)
  }

  handleChange = name => event => {
      this.setState({
          [name]: event.target.value
      })
  }

  async createCustomer () {
    const { name, description } = this.state
    await this.props.createCustomerMutation({
      variables: {
        name,
        description
      }
    })
  }
  
  render() {
    return (
      <ApolloProvider client={client}>
        <div className='main'>
          <TextField
              id="name"
              label="Nome da empresa"
              className='textField'
              margin="normal"
              autoFocus={true}
              onChange={this.handleChange('name')}
              />
          <br />
          <TextField
              id="multiline-flexible"
              label="Descrição"
              multiline
              rowsMax="4"
              className='textField'
              margin="normal"
              onChange={this.handleChange('description')} />
          <Button 
            className='button' raised dense 
            onClick={() => this.createCustomer()}>
            <Save className='leftIcon' />
            Salvar
          </Button>
        </div>  
      </ApolloProvider>
    )
  }
}

export default graphql(ADD_ORGANIZATION, {
  name: 'createCustomerMutation'
})(CustomerNew)