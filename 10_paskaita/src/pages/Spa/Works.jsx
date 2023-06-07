import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import works1 from "../../components/Images/works1.jpg";
import works2 from "../../components/Images/works2.jpg";
import works3 from "../../components/Images/works3.jpg";
import works4 from "../../components/Images/works4.jpg";
import works5 from "../../components/Images/works5.jpg";
import works6 from "../../components/Images/works6.jpg";
import works7 from "../../components/Images/works7.jpg";
import works8 from "../../components/Images/works8.jpg";
const Works = () => {
  return (
    <>
      <Header />
      <main className="bodyStyle">
        <h2>Atlikti darbai</h2>
        <div className="worksStyle">
          <img className="worksImg" src={works1} alt="/" />
          <img className="worksImg" src={works2} alt="/" />
          <img className="worksImg" src={works3} alt="/" />
          <img className="worksImg" src={works4} alt="/" />
          <img className="worksImg" src={works5} alt="/" />
          <img className="worksImg" src={works6} alt="/" />
          <img className="worksImg" src={works7} alt="/" />
          <img className="worksImg" src={works8} alt="/" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Works;
