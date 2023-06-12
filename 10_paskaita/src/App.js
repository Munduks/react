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
// import User from "./pages/User";
// import { UserProvider } from "./contexts/UserContext";
// import LoginForm from "./pages/Login";

const App = () => {
  return (
    // <UserProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      {/*  <Route path="/" element={<Dashboard />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="*" element={<NotFound />} /> */}
      {/* <Route path="/login" element={<LoginForm />} />
      <Route path="/users/:id" element={<User />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/services" element={<Services />} />
      <Route path="/works" element={<Works />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    // </UserProvider>
  );
};

export default App;
