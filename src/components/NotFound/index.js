import './index.css'

const NotFound = () => (
  <div className="notFoundContainer">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
      className="notFound"
    />
    <h1 className="head">Page Not Found</h1>
    <p className="describe">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
