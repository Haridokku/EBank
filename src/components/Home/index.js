import Cookies from 'js-cookie'
import './index.css'

const Home = props => {
  const logoutFromSite = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <div className="homeContainer">
      <div className="headerDetails">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
          className="websiteLogo"
        />
        <button type="button" className="logout" onClick={logoutFromSite}>
          Logout
        </button>
      </div>
      <div className="digitalCardDetails">
        <h1 className="head">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="digital-card"
        />
      </div>
    </div>
  )
}
export default Home
