import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterComponent from "../components/Footer/Footer.js";
import NavbarComponent from "../components/Navbar/Navbar.js";
import NotFound from "../components/Utils/NotFound/NotFound.js";
import LandingComponent from "../components/Landing/Landing.js";
import AnimeComponent from "../components/Anime/Anime.js";
import {getAllFilms} from "../API";
import { useEffect, useState } from "react";
const HomeComponent = ()=>{
    /**
     * State Management for App
     */
    const [films, setFilms] = useState([]);
    useEffect(()=>{
        const getFilms = async()=>{
            try{
                const response = await getAllFilms();
                const films = response?.data;
                setFilms(films);
            }catch(err){
                console.log(err);
            }
        }
        getFilms();
    },[]);
    
    return(
        <Router>
            <NavbarComponent />
            <Routes>   
                <Route path="/" element={<LandingComponent films={films}/>} exact />
                <Route path="/films/:id" element={<AnimeComponent/>} exact />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <FooterComponent />
        </Router>
    );
}

export default HomeComponent;