import React from "react";
import logo from '../../assets/AaryaaLogo.png'
import '../../Components/Header/Header.css'
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <div className="nav-main">
          <div className="nav-left">
                <div className="nav-img">
                  <img src={logo} alt="Logo" />
                </div>
                <div className="nav-left-links">
                  <Link to="/aaryaaTV" style={{textDecoration:"none" }} className="nav-link"><p>Tv</p></Link>
                  <Link to="/Studio" style={{textDecoration:"none" }} className="nav-link"><p>Studio</p></Link>
                  <Link to="/" style={{textDecoration:"none" }} className="nav-link"><p>Network</p></Link>
                </div>
          </div>
          <div className="nav-right">
            <div className="nav-list">
              <ul className="nav-menu">
                <li><Link to="/" style={{textDecoration:"none" }} className="nav-list-link"><p>Home</p></Link></li>
                <li><Link  style={{textDecoration:"none" }} className="nav-list-link"><p>About</p></Link></li>
                <li><Link to="/contact" style={{textDecoration:"none" }} className="nav-list-link"><p>Contact</p></Link></li>
                <li><Link to="/customizedplan" style={{textDecoration:"none" }} className="nav-list-link"><p>All Plan</p></Link></li>
                <li>
                  <div className="get-in-touch">
                    <p className="text">Quick Pay</p>
                    <p className="icon"><FaArrowRightLong className="arrow-icon"/></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </header>
  );
};

export default Header;