import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './apollo';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../components/ui/loading';

const CustomerListLoadable = Loadable({
  loader: () => import('../components/customer/list'),
  loading: Loading
});

const CustomerNewLoadable = Loadable({
  loader: () => import('../components/customer/new'),
  loading: Loading
});

export default class Routes extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <Switch>
            <Route exact path="/customer" component={CustomerListLoadable} />
            <Route exact path="/customer/new" component={CustomerNewLoadable} />
          </Switch>
        </div>
      </ApolloProvider>
    );
  }
}
