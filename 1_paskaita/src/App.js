// folderiu pavadinimai rasomi mazaja raide
// komponentu pavadinimai didziaja
// importai virsuje

import "./App.css";

import FuncButton from "./components/FuncButton";

//apibreziam komponento pavadinima, visada didzioji raide.
// geroji  praktika:failo  pavadinimas toks pat kaip  komponento  pavadinimas
function App() {
  const name = "Raimonda";

  function getName() {
    return "Robertas";
  }
  const getSurname = () => {
    return "Robertukas";
  };
  const surname = getSurname();
  return (
    <div>
      <h1>Raimonda</h1>
      <h2>{name}</h2>
      <h2>{getName()}</h2>
      <h2>{getSurname()}</h2>
      <h2>{surname}</h2>
      <FuncButton title="Click me" />
      <FuncButton title="Spausk mane" />
      <FuncButton title="Nespausk cia" />
    </div>
  );
}
// eksportuojam, kad galetume importuoti kitame faile
export default App;
