import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// Components
import Header from "./components/Header/Header";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HouseDescription from "./pages/HousingDescription";
import About from "./pages/About";




function RoutesComponent() {
    return(
        <Router>
            <div>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/logement/" element={<HouseDescription />} />
                        <Route path="/a-propos" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
            </div>
        </Router>
        
    );
}






export default RoutesComponent;
