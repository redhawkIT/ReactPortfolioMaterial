import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

class NavBar extends Component {

  render() {
    return (
      <AppBar
          iconElementLeft={<IconButton><Menu className="AppBar__Menu"/></IconButton>}
          iconElementRight={<IconButton  iconClassName="muidocs-icon-custom-github"  href='https://github.com/ChrisWiles'/>}
          style={{background: 'none', position:'fixed'}}
          zDepth={0}
          onLeftIconButtonTouchTap={this.props.handleToggle}
        />
    )
  }
}

export default NavBar
