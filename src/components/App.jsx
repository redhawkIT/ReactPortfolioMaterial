import React, {Component} from 'react'

import NavBar from './NavBar'
import SlideDrawer from './SlideDrawer'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleToggle = () => this.setState({open: !this.state.open})

  render() {
    return (
      <div>
        <NavBar handleToggle={this.handleToggle}/>
        <SlideDrawer handleToggle={this.handleToggle} open={this.state.open}/>

        { /* child component will be rendered here */ }
        {this.props.children}

      </div>
    )
  }

}

export default App
