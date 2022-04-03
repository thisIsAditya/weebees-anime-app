import { useEffect, useState } from "react";
import CorouselComponent from "../Corousel/Corousel.js"; 
import {getAllFilms} from "../../API";
import ErrorComponent from "../Utils/Error/ErrorComponent.js";
import SliderComponent from "../Slider/SliderComponent.js";
import InfiniteScrollGrid from "../InfiniteScrollGrid/InfiniteScrollGrid.js";
const LandingComponent = () => {
    /**
     * State Management
     */
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [featuredFilms, setFeaturedFilms] = useState([]);
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
            //Featured Films
            const topRated = films.sort((a,b) => parseInt(a.rt_score) - parseInt(b.rt_score) )            
            setFeaturedFilms(topRated);
            //Recents 
        }
    },[films]);
    return ( 
        <div>
            {err && <ErrorComponent err={err} />}
            <CorouselComponent isLoading={isLoading} err={err} featuredFilms={featuredFilms.slice(0,3)}/>
            <SliderComponent isLoading={isLoading} err={err} topRated={featuredFilms.slice(2,12)} title="Top Rated" />
            <InfiniteScrollGrid items={films} isLoading={isLoading} err={err} />
        </div>
     );
}
 
export default LandingComponent;