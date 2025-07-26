import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <nav>
        <div className="sidebar">
          <div className="header">
            <h4 className="logo">🐶</h4>
            <h3 className="header-title">Doggie Dash</h3>
          </div>
          <div className="menu">
            <ul>
              <li className="menu-item">
                <Link className="menu-links" to="/">
                  <i className="menu-icon" key="home-button"></i>
                  🏠 Dashboard
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-links" to="/">
                  <i className="menu-icon"></i>
                  🔍 Search
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-links" to="/">
                  <i className="menu-icon"></i>
                  ℹ️ About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
