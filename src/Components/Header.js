import { useEffect, useState } from "react";
import { logoURL } from "../../utils/urls";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  useEffect(() => {}, []);
  return (
    <div className="header">
      <img className="logo" src={logoURL} />

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="Login"
            onClick={() => setBtnName(btnName == "Login" ? "Logout" : "Login")}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
