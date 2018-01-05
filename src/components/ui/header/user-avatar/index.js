import React, { Component } from 'react'
import Menu, { MenuItem } from 'material-ui/Menu'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import './index.css'

class UserAvatar extends Component {

  state = {
    auth: true,
    anchorEl: null,
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked })
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleRequestClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {

    const { auth, anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className='root'>
          {auth && (
            <div>
              <Chip
                avatar={<Avatar src="https://pbs.twimg.com/profile_images/651961298398375936/bJiGtvgO_400x400.jpg" />}
                label="Jaydson Gomes"
                onClick={this.handleMenu}
                className='chip'
              />
            
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onRequestClose={this.handleRequestClose}>
                <MenuItem onClick={this.handleRequestClose}>My Account</MenuItem>
                <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
      </div>
    )
  }
}

export default UserAvatar

