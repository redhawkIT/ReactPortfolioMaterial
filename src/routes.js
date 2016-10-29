import App from './components/App.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Info from './components/Info.jsx'

const routes = {
  // base component (wrapper for the whole application).
  component: App,
  childRoutes: [

    {
      path: '/',
      component: Home
    }, {
      path: '/projects',
      component: Projects
    }, {
      path: '/about',
      component: About
    }, {
      path: '/info',
      component: Info
    }
  ]
}

export default routes
