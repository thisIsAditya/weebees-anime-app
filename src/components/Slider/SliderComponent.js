import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import LoadingComponent from "../Utils/Loading/LoadingComponent.js";
import ErrorComponent from "../Utils/Error/ErrorComponent.js";
const SliderComponent = ({topRated, title, err, isLoading}) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return ( 
        <>
            { isLoading && <LoadingComponent /> }
            { err && <ErrorComponent err={err}/> }
            {
                topRated && title &&
                <div className='p-4 me-4'>
                    <h2>
                        {title}
                    </h2>
                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                    >
                        {
                            topRated.map(film => (
                                <Card key={film.id}>
                                    <Card.Img 
                                        variant="top" 
                                        src={film.image} 
                                        className = 'img-thumbnail'
                                    />                
                                </Card>
                            ))
                        }
                    </Carousel>
                </div>
            }
        </>
     );
}
 
export default SliderComponent;