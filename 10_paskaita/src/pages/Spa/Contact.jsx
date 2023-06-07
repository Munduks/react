import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    // Čia galite įdėti kodą, kuris atlieka norimą veiksmą pateikus formą
    // Pavyzdžiui, išvedame į konsolę įvestus duomenis

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Po duomenų pateikimo galite nustatyti submitted reikšmę į true, kad parodytumėte padėkos žinutę
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="bodyStyle">
        <h2>Parašykite mums</h2>
        <div className="formStyle">
          {submitted ? (
            <p>Ačiū už pateiktą užklausą!</p>
          ) : (
            <form className="contactForm" onSubmit={Submit}>
              <div className="formControl">
                <label htmlFor="name">Vardas:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formControl">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formControl">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="submitStyle">
                <button className="btnStyle" type="submit">
                  Pateikti
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
