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
    width: 250
  },
  listFull: {
    width: 'auto'
  },
}

class Sidebar extends React.Component {

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <Link to="/customer">
              <ListItemText primary="Customer" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Example 1" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Example 2" />
            </Link>
          </ListItem>
        </List>
        <Divider />
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