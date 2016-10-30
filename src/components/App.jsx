import React, {Component} from 'react'

import Starry from '../canvas/Starry'

import NavBar from './NavBar'
import SlideDrawer from './SlideDrawer'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      title: 'Home'
    }
  }

  componentDidMount() {
    const cx = document.getElementById('canvas')
    const ctx = cx.getContext('2d')
    let St = new Starry(cx, ctx)
    St.step()
    window.onresize = () => {
      St.cx.width = St.cx.clientWidth
      St.cx.height = St.cx.clientHeight
      if (St.dots.length === 0) {
        St.construct()
      }
      St.render()
    }
    cx.onmousemove = (e) => {
      St.mousePos[0] = e.clientX - cx.offsetLeft
      St.mousePos[1] = e.clientY - 64
    }
    window.onresize()
  }

  handleToggle = () => this.setState({open: !this.state.open})

  setTitle = title => this.setState({title})

  render() {
    const {title, open} = this.state
    return (
      <div>
        <canvas id='canvas'/>
        <NavBar handleToggle={this.handleToggle} title={title}/>
        <SlideDrawer handleToggle={this.handleToggle} open={open} setTitle={this.setTitle}/>

        { /* child component will be rendered here */ }
        {this.props.children}

      </div>
    )
  }

}

export default App
