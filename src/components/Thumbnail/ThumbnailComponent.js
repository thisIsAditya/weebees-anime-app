import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
const ThumbnailComponent = ({movie}) => {
    const [Movie] = useState({
        id : movie.id,
        image : movie.image,
        title : movie.title,
        description : movie.description,
        release_date : movie.release_date
    });
    return ( 
        <Link to={`/films/${Movie.id}`}>
            <Card className="bg-dark text-white m-2" style={{width:"100%"}} >
                <Card.Img src={`${Movie.image}`} alt="Card image" style={{opacity:0.4,maxHeight:"15rem", objectFit:"cover"}} />
                <Card.ImgOverlay className="center">
                    <Card.Title className="display-7"><b>{Movie.title}</b></Card.Title>
                    <Card.Text>                                                    
                        {`${Movie.description?.substring(0, 200)}...`}<b>Read more</b>
                        Release Date : <b>{Movie.release_date}</b>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Link>
     );
}
 
export default ThumbnailComponent;