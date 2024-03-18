import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {userId: '', pin: '', errorMsg: '', showSubmitError: false}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  renderSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  renderFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userCredentials = {user_id: userId, pin}
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }
    const response = await fetch('https://apis.ccbp.in/ebank/login', options)
    const data = await response.json()
    if (response.ok === true) {
      this.renderSuccess(data.jwt_token)
    } else {
      this.renderFailure(data.error_msg)
    }
  }

  render() {
    const {userId, pin, showSubmitError, errorMsg} = this.state
    return (
      <div className="loginContainer">
        <div className="contentContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="logo"
          />
          <form className="formContainer" onSubmit={this.onSubmitForm}>
            <h1 className="heading">Welcome Back!</h1>
            <label htmlFor="userId" className="user">
              User ID
            </label>
            <input
              type="text"
              placeholder="Enter User ID"
              onChange={this.onChangeUserId}
              value={userId}
              id="userId"
              className="input"
            />
            <label htmlFor="pin" className="user">
              PIN
            </label>
            <input
              type="password"
              placeholder="Enter PIN"
              onChange={this.onChangePin}
              id="pin"
              value={pin}
              className="input"
            />
            <button type="submit" className="submitBtn">
              Login
            </button>
            {showSubmitError && <p className="describe">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
