import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HouseDescription from "./pages/HousingDescription";
import About from "./pages/About";




function RoutesComponent() {
    return(
        <Router>
            <div className="main-container">
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/logement/:id" element={<HouseDescription />} />
                        <Route path="/a-propos" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    </div>
                <Footer />
        </Router>
    );
}






export default RoutesComponent;
