import Carousel from 'react-bootstrap/Carousel';
import LoadingComponent from "../Utils/Loading/LoadingComponent.js";
import ErrorComponent from "../Utils/Error/ErrorComponent.js";
import {Link} from "react-router-dom";
const CorouselComponent = ({ featuredFilms , err , isLoading }) => {
    return ( 
        <>
        { isLoading && <LoadingComponent /> }
        { err && <ErrorComponent err={err}/> }
        {
            featuredFilms && 
            <Carousel variant="dark" style={{"maxHeight" : "65vh"}}>
                {
                    featuredFilms.map(film => (
                        <Carousel.Item key={film.id}>
                            <Link to={`/films/${film.id}`}>
                                <img
                                className="d-block w-100"
                                src={film.movie_banner}
                                alt={`${film.title}'s Poster`}
                                style={{
                                    "maxHeight" : "65vh",
                                    "objectFit" : "cover"
                                }}
                                />
                                <Carousel.Caption className='align-items-md-start align-items-center d-flex flex-column'>
                                <h1 className='bg-dark text-light p-2 bg-opacity-75 w-md-25 font-heading'   >{film.title}</h1>
                                <p className='bg-dark text-light p-2 bg-opacity-75 d-none d-sm-block' >{`${film.description.substring(0,200)}...`}</p>
                                </Carousel.Caption>
                            </Link>                            
                        </Carousel.Item>                        
                    ))
                }
            </Carousel> 
        }
        </>
     );
}
 
export default CorouselComponent;