import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link pour la navigation
import '../../styles/main.css';
import logo from "../../assets/logos/logo.png";

function Header() {
    const location = useLocation();

    return (
      <header className='header'>
        <div className='logo'>
            <img src={logo} alt="Logo_Kasa" />
        </div>
        <nav className="nav">
            <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
            Accueil</Link>
            <Link
            to="/a-propos"
            className={`nav-link ${location.pathname === "/a-propos" ? "active" : ""}`}>
            A Propos</Link>
        </nav>
      </header>
    );
  };
  



  export default Header
