import React, {Component} from 'react'

import NavBar from './NavBar'


class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>

        { /* child component will be rendered here */ }
        {this.props.children}

      </div>
    )
  }

}

export default App
