// import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import "./index.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className="bodyStyle">
        <div className="photoStyle">
          <img
            className="homeImage"
            src="https://www.dovanusala.lt/83622-thickbox_default/taju-nugaros-masazas-su-cinamono-aliejumi-masazo-namuose-azia-spa.jpg"
            alt="/"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
