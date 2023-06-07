import { Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Marketplace from "./pages/Marketplace";
import Home from "./pages/Spa/Home";
import About from "./pages/Spa/About";
import News from "./pages/Spa/News";
import Services from "./pages/Spa/Services";
import Works from "./pages/Spa/Works";
import Contact from "./pages/Spa/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/*  <Route path="/" element={<Dashboard />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="*" element={<NotFound />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/services" element={<Services />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
