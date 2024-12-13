import { useState } from "react"; // Import de useState
import '../styles/header.css';
import logo from "../assets/images/logo.png";

function Header() {
    const [activeLink, setActiveLink] = useState("Accueil");

    return (
      <header className='header'>
        <div className='logo'>
            <img src={logo} alt="Logo_Kasa" />
        </div>
        <nav className="nav">
            <a href="#home"
            className={`nav-link ${activeLink === "Accueil" ? "active" : ""}`} 
            onClick={() => setActiveLink("Accueil")}>Accueil</a>
            <a href="#about"
            className={`nav-link ${activeLink === "A Propos" ? "active" : ""}`}
            onClick={() => setActiveLink("A Propos")}>A Propos</a>
        </nav>
      </header>
    );
  };
  



  export default Header
