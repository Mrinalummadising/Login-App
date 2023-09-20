import {Component} from 'react'

import './index.css'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  onchangeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    let messageText
    let btnClick

    if (isLogin) {
      messageText = <Message content="Welcome user" />
      btnClick = <Login onchangeStatus={this.onchangeStatus} />
    } else {
      messageText = <Message content="Please Login" />
      btnClick = <Logout onchangeStatus={this.onchangeStatus} />
    }

    return (
      <div className="container-bg">
        <div className="login-container-card">
          {messageText}
          {btnClick}
        </div>
      </div>
    )
  }
}

export default Home
