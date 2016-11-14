import tree from '../tree'

export default function (nextState, replace) {
  if (!tree.get('isAuthenticated')) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
