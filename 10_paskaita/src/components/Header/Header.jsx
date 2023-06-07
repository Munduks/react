import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";
import "./Header.css";
import Meniu from "./Meniu";

const Header = () => {
  return (
    <header className="headerStyle">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="/" />
        </Link>
      </div>
      <Meniu />
    </header>
  );
};

export default Header;
