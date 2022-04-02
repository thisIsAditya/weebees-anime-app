import { useEffect, useState } from "react";
import CorouselComponent from "../Corousel/Corousel.js"; 
import {getAllFilms} from "../../API";
import LoadingComponent from "../Utils/Loading/LoadingComponent.js";
import ErrorComponent from "../Utils/Error/ErrorComponent.js";

const LandingComponent = () => {
    /**
     * State Management
     */
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [featuredFilms, setFeaturedFilms] = useState(null);
    useEffect(()=>{
        const getFilms = async()=>{
            try{
                const response = await getAllFilms();
                const films = response?.data;
                setFilms(films);
                setIsLoading(false);
            }catch(err){
                console.log(err);
                setIsLoading(false);
                setErr(err.message);
            }
        }
        getFilms();
    },[]);
    useEffect(()=>{
        if(films.length !== 0) {
            const topThreeFilms = films.sort((a,b) => parseInt(a.rt_score) - parseInt(b.rt_score) ).slice(0,3)
            console.log(topThreeFilms, "Top three films");
            setFeaturedFilms(topThreeFilms);
        }
    },[films]);

    return ( 
        <div>
            {isLoading && <LoadingComponent />}
            {err && <ErrorComponent />}
            {featuredFilms && <CorouselComponent featuredFilms={featuredFilms} />}
        </div>
     );
}
 
export default LandingComponent;