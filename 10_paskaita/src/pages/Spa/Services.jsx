import React from "react";
import tailando from "..//../components/Images/tailando.jpeg";
import klasikinis from "..//../components/Images/klasikinis.jpg";
import segmentinis from "..//../components/Images/segmentinis.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Services = () => {
  return (
    <>
      <Header />
      <main className="bodyStyle">
        <h2>Paslaugos</h2>
        <div className="cardsStyle">
          <div className="serviceCard">
            <img className="serviceImg" src={tailando} alt="/" />
            <h4>Tailando masažai</h4>
            <p>
              Tailando masažai, dar kitaip vadinami Nuat Bo’rarn (senovės
              masažais) – tai senovės Rytų fizinės ir dvasinės gerovės kūrimo
              pagrindas, susiformavęs daugiau nei prieš du su puse tūkstančio
              metų. Ypatingo meistriškumo ir didelės patirties reikalaujantys
              Tailando masažai priskiriami prie seniausių gydymo menų,
              apjungiančių masažą atliekančių meistrų techniką su jų fizine
              energija ir dvasine patirtimi.
            </p>
          </div>
          <div className="serviceCard">
            <img className="serviceImg" src={klasikinis} alt="/" />
            <h4>Klasikiniai masažai</h4>
            <p>
              Profesionaliai atliktas masažas ne tik teigiamai veikia Jūsų
              fizinę bei dvasinę savijautą, bet tuo pačiu padeda įveikti tam
              tikrus negalavimus bei pasiekti norimą rezultatą – atpalaiduoja
              įsitempusius raumenis, nuima įtampą bei nuovargį, tonizuoja,
              detoksikuoja ar koreguoja kūno formas. Pasimėgaukite mūsų
              klasikiniais terapiniais masažais bei pajuskite magišką jų poveikį
              Jūsų organizmui…
            </p>
          </div>
          <div className="serviceCard">
            <img className="serviceImg" src={segmentinis} alt="/" />
            <h4>Segmentiniai masažai</h4>
            <p>
              Skirkite dėmesio kuriai nors konkrečiai savo kūno sričiai ir
              palepinkite save segmentiniu tos srities masažu – refleksologiniu
              pėdų, atpalaiduojančiu rankų, tailandietišku nugaros ir pečių ar
              taškiniu veido ir galvos masažu. Segmentinis tik tam tikros kūno
              dalies masažas leidžia susikoncentruoti ties specifinėmis
              problemomis ir suteikia dar gilesnį atpalaiduojantį ar
              stimuliuojantį poveikį.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;
