import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Works />
        <Contact />
      </main>
    </div>
  );
}

export default App;
