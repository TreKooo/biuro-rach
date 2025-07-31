import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Offer from "./pages/Offer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Biuro Rachunkowe LuxTax</h1>
          <nav>
            <ul className="nav-list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  end
                >
                  Oferta
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  O nas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main">
          <Routes>
            <Route path="/" element={<Offer />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
 <Offer></Offer>
        <footer className="footer">
          <p>© 2025 Biuro Rachunkowe LuxTax. Wszelkie prawa zastrzeżone.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
