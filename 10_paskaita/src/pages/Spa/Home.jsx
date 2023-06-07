// import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import home from "../../components/Images/homeImage.jpg";
// import "./index.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className="bodyStyle">
        <div className="photoStyle">
          <img className="homeImage" src={home} alt="/" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
