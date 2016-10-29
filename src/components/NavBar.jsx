import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import {Link, IndexLink} from 'react-router'

class NavBar extends Component {

  render() {
    return (
      <AppBar
          iconElementRight={<IconButton iconClassName="muidocs-icon-custom-github"  href='https://github.com/ChrisWiles'/>}
          style={{background: 'none', position:'fixed'}}
          zDepth={0}
          // onLeftIconButtonTouchTap={this.props.handleToggle}
        />
    )
  }
}

export default NavBar
//
// <IndexLink to="/">React App</IndexLink>
//
//     <Link to="/login">Log in</Link>
//     <Link to="/signup">Sign up</Link>
