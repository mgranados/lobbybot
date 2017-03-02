import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './components/App'
import Home from './pages/Home'
import Users from './pages/Users'
import Login from './pages/Login'

export default function routes (store) {
  const ensureAuthenticated = (nextState, replace) => {
    const { session } = store.getState()

    if (!session.loggedIn) {
      replace({
        pathname: '/login'
      })
    }
  }

  return (
    <Route>
      <Route path='/login' component={Login} />

      <Route path='/' component={App} onEnter={ensureAuthenticated}>
        <IndexRoute component={Home} />
        <Route path='/users' component={Users} />
      </Route>
    </Route>
  )
}
