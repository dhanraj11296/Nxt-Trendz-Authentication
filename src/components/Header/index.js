// Write your JS code here
import './index.css'
const Header = () => (
  <nav className="navHeader">
    <div className="navContent">
      <div className="navBarMobileLogoContainer">
        <img
          className="websiteLogo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <button type="button" className="navMobileBtn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="navBarImg"
          />
        </button>
      </div>
      <div className="navContent navBarLargeContainer">
        <img
          className="websiteLogo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="navMenu">
          <li className="navMenuItem">Home</li>
          <li className="navMenuItem">Products</li>
          <li className="navMenuItem">Cart</li>
        </ul>
        <button type="button" className="logoutDesktopBtn">
          Logout
        </button>
      </div>
    </div>
    <div className="navMenuMobile">
      <ul className="navMenuListMobile">
        <li className="navMenuItemMobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="navBarImg"
          />
        </li>
        <li className="navMenuItemMobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="navBarImg"
          />
        </li>
        <li className="navMenuItemMobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="navBarImg"
          />
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
