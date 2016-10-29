import React, {Component} from 'react'
import Starry from '../canvas/Starry'

class Home extends Component {

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

  render() {
    return (
      <div className='canvasbg'>
        <canvas id='canvas'/>
        <div className='head'>
          <span>
            <img src='https://avatars3.githubusercontent.com/u/9455409?v=3&s=466' role="presentation"/>
          </span>
          <h2>Christopher Wiles</h2>
          <h3>Software Engineer</h3>
        </div>
      </div>
    )
  }
}

export default Home
