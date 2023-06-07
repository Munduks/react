import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // API užklausa naujienoms
    // Pavyzdžiui:
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setNews(data.slice(0, 2))); // Gaunami tik pirmos dvi naujienos
  }, []);

  return (
    <>
      <Header />
      <main className="bodyStyle">
        <h2>Naujienos</h2>
        <div className="newsStyle">
          {news.map((item, index) => (
            <div key={index} className="newsCard">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default News;
