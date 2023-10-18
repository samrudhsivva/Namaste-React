import { useState } from "react";
import { logoURL } from "../../utils/urls";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <img className="logo" src={logoURL} />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
