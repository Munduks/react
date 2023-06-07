// import Meniu from "./Meniu";
import Meniu from "../Header/Meniu";
import "../Header/Header.css";
// import "./Header.css";

const Footer = () => {
  return (
    <footer className="headerStyle">
      <p>{new Date().getFullYear()} Visos teises saugomos </p>
      <Meniu />
    </footer>
  );
};
export default Footer;
