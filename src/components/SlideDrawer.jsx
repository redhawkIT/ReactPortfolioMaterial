import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import { IndexLink, Link } from 'react-router'
import { ListItem } from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import Home from 'material-ui/svg-icons/action/home'
import Project from 'material-ui/svg-icons/action/view-module'
import About from 'material-ui/svg-icons/social/person'
import Info from 'material-ui/svg-icons/action/info'

class SlideDrawer extends Component {
  render() {
    return (
      <Drawer
          width={300}
          docked={false}
          open={this.props.open}
          onRequestChange={(open) => this.props.handleToggle(open) }
          >
          <div className='subHeader'>Christopher Wiles</div>
          <IndexLink to="/" className='link' activeClassName="active" onTouchTap={this.props.handleToggle}>
            <ListItem primaryText="Home" leftIcon={<Home/>} />
          </IndexLink>
          <Link to="/projects" className='link' activeClassName="active"  onTouchTap={this.props.handleToggle}>
            <ListItem primaryText="Projects" leftIcon={<Project/>} />
          </Link>
          <Link to="/about" className='link' activeClassName="active" onTouchTap={this.props.handleToggle}>
            <ListItem primaryText="About" leftIcon={<About/>} />
          </Link>
          <Link to="/info" className='link' activeClassName="active" onTouchTap={this.props.handleToggle}>
            <ListItem primaryText="Info" leftIcon={<Info/>} />
          </Link>
        </Drawer>
    )
  }
}

export default SlideDrawer
