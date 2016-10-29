import App from './components/App.jsx'
import Home from './components/Home.jsx'
// import LoginForm from './components/LoginForm.jsx'
// import SignUpForm from './components/SignUpForm.jsx'


const routes = {
  // base component (wrapper for the whole application).
  component: App,
  childRoutes: [

    {
      path: '/',
      component: Home
    }

    // {
    //   path: '/login',
    //   component: LoginForm
    // },
    //
    // {
    //   path: '/signup',
    //   component: SignUpForm
    // }

  ]
}

export default routes
