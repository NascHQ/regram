import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import '../index.css';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { LIST_ORGANIZATION } from '../graphql';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

class CustomerList extends Component {
  render() {
    let orgs = this.props.data.allOrganizations;
    return (
      <div className="main">
        <Paper>
          <Table className="table">
            <TableHead>
              <TableRow>
                <TableCell numeric># ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orgs !== undefined && orgs.edges ? (
                orgs.edges.map(({ node }) => (
                  <TableRow key={node.id}>
                    <TableCell key={node.id}>{node.id}</TableCell>
                    <TableCell>{node.name}</TableCell>
                    <TableCell>{node.description}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell>Nothing to see here!</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
        <br />
        <Link to="/customer/new">
          <Button fab color="primary" aria-label="add" className="button">
            <AddIcon />
          </Button>
        </Link>
      </div>
    );
  }
}

export default graphql(LIST_ORGANIZATION)(CustomerList);
