import { logoURL } from "../../utils/urls";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logoURL} />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
