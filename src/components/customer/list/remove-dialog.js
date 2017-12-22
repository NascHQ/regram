import React from 'react'
import Button from 'material-ui/Button'
import { client } from '../../../lib/apollo'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import { REMOVE_ORGANIZATION, LIST_ORGANIZATION } from '../graphql'
import '../index.css'
import remove from 'lodash/remove'

function Transition (props) {
  return <Slide direction='up' {...props} />
}

class RemoveDialog extends React.Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleRemove = async () => {
    client.mutate({
      // Remove
      mutation: REMOVE_ORGANIZATION,
      variables: {
        id: this.props.id,
        active: false
      },
      update: (proxy, { data: { removeOrg } }) => {
        // Reading from cache
        const data = proxy.readQuery({ query: LIST_ORGANIZATION })
    
        // Removing from cache
        remove(data.allOrganizations.edges, (org) => org.node.id === this.props.id)
    
        // Updating the cache
        proxy.writeQuery({ query: LIST_ORGANIZATION, data })
      }
    })
    // Close the dialog
    this.handleClose()
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    return [
      <IconButton key='delete-button' onClick={this.handleClickOpen} className='button' aria-label='Delete'>
        <DeleteIcon />
      </IconButton>,
      <Dialog
        key='dialog-delete'
        open={this.state.open}
        transition={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'>
        
        <DialogTitle id='alert-dialog-slide-title'>
          {'Deseja remover este cliente?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
              O cliente não irá mais aparecer nas suas buscas e ficará inativo no sistema.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color='primary'>
            Cancelar
          </Button>
          <Button onClick={this.handleRemove} color='primary'>
            Remover
          </Button>
        </DialogActions>
      </Dialog>
    ]
  }
}

export default RemoveDialog
