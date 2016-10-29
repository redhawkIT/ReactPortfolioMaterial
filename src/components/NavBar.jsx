import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'

class NavBar extends Component {

  render() {
    return (
      <AppBar
          iconElementRight={<IconButton iconClassName="muidocs-icon-custom-github"  href='https://github.com/ChrisWiles'/>}
          style={{background: 'none', position:'fixed'}}
          zDepth={0}
          onLeftIconButtonTouchTap={this.props.handleToggle}
        />
    )
  }
}

export default NavBar
