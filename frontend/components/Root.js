import React, { PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router } from 'react-router'
import { root } from 'baobab-react/higher-order'
import routes from '../routes'
import tree from '../tree'

const Root = ({ history }) => (
  <MuiThemeProvider>
    <Router key={Math.random()} history={history} routes={routes} />
  </MuiThemeProvider>
)

Root.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
}

export default root(tree, Root)

