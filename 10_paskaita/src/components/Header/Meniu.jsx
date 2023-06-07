import { Link } from "react-router-dom";

const Meniu = () => {
  return (
    <nav className="navbarSection">
      <Link to="/about">Apie mus</Link>
      <Link to="/news">Naujienos</Link>
      <Link to="/services">Paslaugos</Link>
      <Link to="/works">Atlikti darbai</Link>
      <Link to="/contact">Kontaktai</Link>
    </nav>
  );
};
export default Meniu;
