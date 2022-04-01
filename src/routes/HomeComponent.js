import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterComponent from "../components/Footer/Footer.js";
import NavbarComponent from "../components/Navbar/Navbar.js";
import NotFound from "../components/Utils/NotFound/NotFound.js";
import LandingComponent from "../components/Landing/Landing.js";
import AnimeComponent from "../components/Anime/Anime.js";
const HomeComponent = ()=>{
    return(
        <Router>
            <NavbarComponent />
            <Routes>   
                <Route path="/" element={<LandingComponent/>} exact />
                <Route path="/films/:id" element={<AnimeComponent/>} exact />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <FooterComponent />
        </Router>
    );
}

export default HomeComponent;