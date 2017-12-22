import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { graphql, ApolloProvider } from 'react-apollo'
import { client } from '../../../lib/apollo'
import '../index.css'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import IconButton from 'material-ui/IconButton'
import EditIcon from 'material-ui-icons/Edit'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import RemoveDialog from './remove-dialog'
import { LIST_ORGANIZATION } from '../graphql'

class CustomerList extends Component {
  render () {
    let orgs = this.props.data.allOrganizations
    return (
      <ApolloProvider client={client}>
        <div className='main'>
          <Paper>
            <Table className='table'>
              <TableHead>
                <TableRow>
                  <TableCell numeric>Id</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { orgs !== undefined && orgs.edges ? orgs.edges.map(({ node }) => (
                  <TableRow key={node.id}>
                    <TableCell key={node.id}>{node.id}</TableCell>
                    <TableCell>{node.name}</TableCell>
                    <TableCell>{node.description}</TableCell>
                    <TableCell>
                      <div className='list-actions'>
                        <Link to={{
                          pathname: `/customer/${node.id}`,
                          state: { organization: node }
                        }} >
                          <IconButton className='button' aria-label='Edit'>
                            <EditIcon />
                          </IconButton>
                        </Link>
                        <RemoveDialog update={this.update.bind(this)} id={node.id} />
                      </div>
                    </TableCell>
                  </TableRow>
                )) : <TableRow><TableCell>Nope</TableCell></TableRow>}
              </TableBody>
            </Table>
          </Paper>
          <br />
          <Link to='/customer/new'>
            <Button fab color='primary' aria-label='add' className='button'>
              <AddIcon />
            </Button>
          </Link>
        </div>
      </ApolloProvider>
    )
  }
}

export default graphql(LIST_ORGANIZATION)(CustomerList)
