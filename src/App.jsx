import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Footer from "./components/footer/Footer";
import { ThemeContext } from "./Context/theme";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Seo from "./components/Seo/Seo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <div className={`${themename} app`}>
      <Router>
        <Seo />
        <div className="App" id="scroll">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
