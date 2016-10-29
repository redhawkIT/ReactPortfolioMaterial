import React, {Component, PropTypes} from 'react'
import Drawer from 'material-ui/Drawer'
import { IndexLink, Link } from 'react-router'
import { ListItem } from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import Home from 'material-ui/svg-icons/action/home'
import Project from 'material-ui/svg-icons/action/view-module'
import About from 'material-ui/svg-icons/social/person'
import Info from 'material-ui/svg-icons/action/info'

const SlideDrawer = ({handleToggle, open}) => (
  <Drawer
      width={300}
      docked={false}
      open={open}
      onRequestChange={e => handleToggle(e) }
      >
      <div className='subHeader'>Christopher Wiles</div>
      <IndexLink to="/" className='link' activeClassName="active" onTouchTap={handleToggle}>
        <ListItem primaryText="Home" leftIcon={<Home/>} />
      </IndexLink>
      <Link to="/projects" className='link' activeClassName="active" onTouchTap={handleToggle}>
        <ListItem primaryText="Projects" leftIcon={<Project/>} />
      </Link>
      <Link to="/about" className='link' activeClassName="active" onTouchTap={handleToggle}>
        <ListItem primaryText="About" leftIcon={<About/>} />
      </Link>
      <Link to="/info" className='link' activeClassName="active" onTouchTap={handleToggle}>
        <ListItem primaryText="Info" leftIcon={<Info/>} />
      </Link>
    </Drawer>
)

SlideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default SlideDrawer
