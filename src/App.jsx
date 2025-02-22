import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FaHatCowboy } from "react-icons/fa";


const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg shadow-sm custom-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-4 text-light d-flex align-items-center">
          <FaHatCowboy className="me-2" /> Artesanías Colombianas
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className={`nav-link fw-semibold ${location.pathname === '/' ? 'active' : ''}`}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link fw-semibold ${location.pathname === '/about' ? 'active' : ''}`}>Sobre Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link fw-semibold ${location.pathname === '/contact' ? 'active' : ''}`}>Contáctanos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className="container-fluid bg-light min-vh-100 d-flex flex-column p-0 m-0">
        <Navbar />
        <div className="flex-grow-1 d-flex align-items-center justify-content-center w-100 m-0 p-0">
          <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center m-0 p-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
               <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
