import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'
import ActionDashboard from 'material-ui/svg-icons/action/dashboard'
import SocialPeople from 'material-ui/svg-icons/social/people'
import { withRouter } from 'react-router'

class SideNav extends Component {
  render () {
    const { router } = this.props

    return (
      <div style={{ width: 256, borderRight: '1.1px solid #d3d3d3' }}>
        <List>
          <ListItem
            onClick={() => router.push('/')}
            primaryText='Home'
            leftIcon={<ActionDashboard />}
          />
          <ListItem
            onClick={() => router.push('/users')}
            primaryText='Users'
            leftIcon={<SocialPeople />}
          />
        </List>
      </div>
    )
  }
}

export default withRouter(SideNav)
