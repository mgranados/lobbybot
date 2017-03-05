import React from 'react'
import { IndexRoute, Route, browserHistory } from 'react-router'
import App from './components/App'
import Public from './components/Public'

import Home from './pages/Home'
import About from './pages/About'
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
      <Route path='/' component={Public}>
        <IndexRoute component={Home} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
      </Route>

      <Route path='/app' component={App} onEnter={ensureAuthenticated}>
        <IndexRoute component={App} />
        <Route path='/users' component={Users} />
      </Route>
    </Route>
  )
}
