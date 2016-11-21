import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Info from './components/Info'

export default (
  <Route path="/" component={App}>
    {/* Show the dashboard at / */}
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="info" component={Info}/>
  </Route>
)
