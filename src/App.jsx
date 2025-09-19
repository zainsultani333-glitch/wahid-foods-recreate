import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/MenuBar/Navbar";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Disclaimer from "./components/Pages/Disclaimer";
import Footer from "./components/Footer/Footer";
import Apps from "./components/Pages/Apps";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)]">
        <Routes>
          <Route path="/products" element={<div>Products Page</div>} />
          <Route path="/app" element={<Apps />} />
          <Route path="/help" element={<div>Help & Support Page</div>} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
