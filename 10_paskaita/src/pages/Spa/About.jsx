import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
// import ".index.css";

const About = () => {
  return (
    <>
      <Header />
      <main className="bodyStyle">
        <h2>Apie mus</h2>
        <p>
          Azia Spa – tai jaukūs Rytų masažo namai, įsikūrę Vilniaus Senamiesčio
          širdyje, kuriuose laukiamas kiekvienas, norintis nors trumpam
          atitrūkti nuo kasdienybės, pajusti tikrą rytietiškojo pasaulio dvasią
          ir pasimėgauti atpalaiduojančiomis Spa procedūromis bei kvepiančios
          arbatos puodeliu…
          <p>
            Azia Spa masažo namuose teikiamų paslaugų asortimente – begalė
            rytietiškų Spa procedūrų veidui ir kūnui, viso kūno ir segmentinių
            masažų, egzotiškų Spa ritualų poroms bei Spa programų, pritaikytų
            individualiems poreikiams. Čia dirbantys meistrai iš Tailando – tai
            vizitinė šių masažo namų kortelė. Atkeliavę iš Tolimosios Azijos
            šalies, su savimi jie atsivežė ir dalelę Rytų pasaulio – autentiškus
            Spa procedūrų receptus, senovines masažo technikas bei natūralius
            Rytuose naudojamus Spa produktus.
          </p>
          <p>
            Apsilankykite Azia Spa Rytų masažo namuose ir pasinerkite į
            atpalaiduojantį rytietiškų pojūčių pasaulį…
          </p>
        </p>
        <img
          className="imageAbout"
          src="https://aziaspa.lt/wp-content/uploads/2015/10/IMG_6396-1024x683.jpg"
          alt="/"
        />
      </main>
      <Footer />
    </>
  );
};

export default About;