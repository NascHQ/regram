import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Save from 'material-ui-icons/Save';
import Button from 'material-ui/Button';
import '../index.css';
import { graphql } from 'react-apollo';
import { ApolloProvider } from 'react-apollo';
import { client } from '../../../lib/apollo';
import { UPDATE_ORGANIZATION } from '../graphql';

class CustomerEdit extends Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  updateCustomer = async id => {
    const { name, description } = this.state;
    await this.props.updateCustomerMutation({
      variables: {
        id,
        name,
        description
      }
    });
  };

  render() {
    const org = this.props.location.state.organization;
    // TODO: If there's no state we should get the organization data from GraphQL
    // This is the scenario where a user is trying to access the URL directly
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <TextField
            id="name"
            label="Nome da empresa"
            className="textField"
            defaultValue={org.name}
            margin="normal"
            autoFocus={true}
            onChange={this.handleChange('name')}
          />
          <br />
          <TextField
            id="multiline-flexible"
            label="Descrição"
            defaultValue={org.description}
            multiline
            rowsMax="4"
            className="textField"
            margin="normal"
            onChange={this.handleChange('description')}
          />
          <Button
            className="button"
            raised
            dense
            onClick={() => this.updateCustomer(org.id)}
          >
            <Save className="leftIcon" />
            Salvar
          </Button>
        </div>
      </ApolloProvider>
    );
  }
}

export default graphql(UPDATE_ORGANIZATION, {
  name: 'updateCustomerMutation'
})(CustomerEdit);
