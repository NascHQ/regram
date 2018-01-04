import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import '../index.css'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import { LIST_ORGANIZATION } from '../graphql'

class CustomerList extends Component {
  render () {
    let orgs = this.props.data.allOrganizations
    return (
      <div className='main'>
        <Paper>
          <Table className='table'>
            <TableHead>
              <TableRow>
                <TableCell numeric>Id</TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Descrição</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { orgs !== undefined && orgs.edges ? orgs.edges.map(({ node }) => (
                <TableRow key={node.id}>
                  <TableCell key={node.id}>{node.id}</TableCell>
                  <TableCell>{node.name}</TableCell>
                  <TableCell>{node.description}</TableCell>
                </TableRow>
              )) : <TableRow><TableCell>Nope</TableCell></TableRow>}
            </TableBody>
          </Table>
        </Paper>
        <br />
      </div>
    )
  }
}

export default graphql(LIST_ORGANIZATION)(CustomerList)
