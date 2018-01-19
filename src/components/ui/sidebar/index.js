/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import ContactMailIcon from 'material-ui-icons/ContactMail'
import { Link } from 'react-router-dom'

const styles = {
  list: {
    width: 250,
    height: '100%',
    position: 'relative'
  },
  listFull: {
    width: 'auto'
  },
  listItem: {
    textAlign: 'left',
    padding: 0
  },
  footer: {
    position: 'absolute',
    bottom: '1rem',
    width: '100%',
    textAlign: 'center',
  },
}

class Sidebar extends React.Component {

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button component={Link} to='/customer'>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Customer" className={classes.listItem} />
          </ListItem>
          <ListItem button component={Link} to='/'>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Example 1" className={classes.listItem} />
          </ListItem>
          <ListItem button component={Link} to='/'>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Example 2" className={classes.listItem} />
          </ListItem>
        </List>
        <Divider />
        <div className={classes.footer}>
          <p><strong>Nasc.io</strong></p>
          <p>Born to be different</p>  
        </div>
      </div>
    )
    
    return [
      <div key="drawer">
        <Drawer type="permanent">
          {sideList}
        </Drawer>
      </div>
    ]
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Sidebar)