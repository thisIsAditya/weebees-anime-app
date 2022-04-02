import Carousel from 'react-bootstrap/Carousel';

const CorouselComponent = ({featuredFilms}) => {
    return ( 
        <Carousel variant="dark">
            {
                featuredFilms &&
                featuredFilms.map(film => (
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={film.movie_banner}
                        alt={`${film.title}'s Poster`}
                        style={{
                            "maxHeight" : "60vh",
                            "object-fit" : "cover"
                        }}
                        />
                        <Carousel.Caption className='align-items-center d-flex flex-column'>
                        <h3 className='bg-dark text-light p-2 bg-opacity-50 w-md-25'   >{film.title}</h3>
                        <p className='bg-dark text-light p-2 bg-opacity-50 d-none d-sm-block' >{`${film.description.substring(0,200)}...`}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
        
     );
}
 
export default CorouselComponent;