import React from 'react'
import { withAuth } from '../../hoc/WithAuth.jsx'
import UIDropdown from '../UI Components/UIDropdown.jsx'
import CallApi from '../../utils/apies'

class User extends React.Component {
  handleLogOut = () => {
    const { auth, authActions } = this.props
    CallApi.delete('/authentication/session', {
      body: { session_id: auth.session_id },
    }).then(() => {
      authActions.onLogOut()
    })
  }

  render() {
    const { user } = this.props.auth
    return (
      <div className="user">
        <div className="dropdown">
          <UIDropdown
            render={(toggleShow) => (
              <img
                className="user-img rounded-circle"
                src={
                  `https://image.tmdb.org/t/p/w500${user.avatar.tmdb.avatar_path}` ||
                  `https://secure.gravatar.com/avatar/${user.avatar.gravatar.hash}.jpg?s=64`
                }
                alt=""
                onClick={toggleShow}
              />
            )}
            position={{ right: '2.5px', top: '50px' }}
            {...this.props}
          >
            {() => {
              return (
                <div className="dropdown__menu">
                  <div
                    className="dropdown__menu-item"
                    onClick={this.handleLogOut}
                  >
                    Выйти
                  </div>
                </div>
              )
            }}
          </UIDropdown>
        </div>
      </div>
    )
  }
}

export default withAuth(User)
