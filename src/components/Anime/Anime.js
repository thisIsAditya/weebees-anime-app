import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import Loading from "../Utils/Loading/LoadingComponent";
import ErrorComponent from "../Utils/Error/ErrorComponent";
import {getFilm} from "../../API";
import Badge from 'react-bootstrap/Badge'
// import Card from "react-bootstrap/Card";
// import Stack from 'react-bootstrap/Stack'
// import Scroll from "../Utils/Scroll.js"
const AnimeComponent = () => {
    const {id} = useParams();
    const [IsPending, setIsPending]=useState(true);
    const [movie, setmovie]=useState({
        image : "",
        title : "",
        rt_score : "",
        original_title_romanised : "",
        running_time : "",
        description : "",
        release_date : "",
        production_companies : [],
        movie_banner : ""
    });
    const [Err, setErr]=useState(null);
    useEffect(()=>{
        const getData= async()=>{
            const movieResponse = await getFilm(id)
            if(movieResponse.status >= 400){
                setErr(`Error Code : ${movieResponse.status} | Message : ${movieResponse.message}`)
                setIsPending(false);
            }else{
                console.log(movieResponse.data, "THis is state");
                setmovie(movieResponse.data)
                setIsPending(false);
            }
        }
        getData();
    },[id]);
    return ( 
        <div 
            className=" py-4 rounded bg-image p-5 text-center shadow-1-strong d-flex align-items-center"
            style={{
                "backgroundImage" : `url('${movie.movie_banner}')`, 
                "minHeight": "100vh", 
                "objectFit":"none"
            }}
        >
            <Container 
                className="py-4 "
            >
                {/* <img src={movie.movie_banner} alt={`Poster for ${movie.title}`} /> */}
                {IsPending && <Loading />}
                {Err && <ErrorComponent err={Err} />}
                {
                    !IsPending && !Err && movie &&
                    <>
                    <Row className="justify-content-center align-items-center">
                        <Col lg={3} className="d-flex justify-content-center align-items-center mb-2 me-sm-2 border-light bg-transaparent">
                            <img src={`${movie.image}`} alt={`Poster for ${movie.title}`} style={{maxWidth:"100%"}}/>
                        </Col>
                        <Col lg={6} className="d-flex align-items-center p-4 text-white  mt-2 ms-sm-2 border-light bg-dark">
                            <div>                             
                                <h2 className="font-heading"><b>{movie.title}</b>  <Badge bg="primary">{movie.rt_score}</Badge></h2>
                                <p><i>{movie.original_title_romanised}</i></p>
                                <p><b>Runtime : </b>{movie.running_time} mins</p>
                                <p>
                                    {movie.description}
                                </p>
                                <p><b>Year</b> : {movie.release_date} </p>
                            </div>
                        </Col>
                    </Row>
                    </>
                }
                    
            </Container>

        </div>
     );
}
 
export default AnimeComponent;