import App from './components/App'
import Home from './pages/Home'
import Users from './pages/Users'
import Login from './pages/Login'
import isAuthenticated from './utils/isAuthenticated'

export default {
  childRoutes: [
    { path: '/login', component: Login },
    { path: '/',
      component: App,
      onEnter: isAuthenticated,
      indexRoute: { component: Home },
      childRoutes: [
        { path: '/users', component: Users }
      ]
    }
  ]
}
