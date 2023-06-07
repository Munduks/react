import { Link } from "react-router-dom";
import "./Header.css";
import Meniu from "./Meniu";

const Header = () => {
  return (
    <header className="headerStyle">
      <div className="logo">
        <Link to="/">
          <img
            src="https://www.aziamedispa.com/wp-content/uploads/2021/06/Azia_Logo_Color.png.webp"
            alt="/"
          />
        </Link>
      </div>
      <Meniu />
    </header>
  );
};

export default Header;
