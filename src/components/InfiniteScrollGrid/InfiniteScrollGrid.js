import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingComponent from "../Utils/Loading/LoadingComponent.js";
import ErrorComponent from "../Utils/Error/ErrorComponent.js";
import { useEffect, useState } from 'react';
import ThumbnailComponent from '../Thumbnail/ThumbnailComponent.js';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const InfiniteScrollGrid = ({items, isLoading, err}) => {
    const [itemsToDisplay, setItemsToDisplay] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    useEffect(()=>{
        if(items.length > 0){
            setTimeout(()=> {
                setItemsToDisplay(items.slice(0,3));
            }, 1000)
        }
    },[items])
    const nextData = ()=> {
        if(itemsToDisplay.length >= items.length){
            setHasMore(false);
        }
        setTimeout(()=>{
            setItemsToDisplay([...itemsToDisplay, ...items.slice(itemsToDisplay.length, itemsToDisplay.length+3)]);        
        }, 500)
    }
    return (
        <div className='d-flex flex-column align-items-center bg-dark text-white py-4'>
            {isLoading && <LoadingComponent />}
            {err && <ErrorComponent err={err} />}
            <h1>All Movies</h1>
            {
                itemsToDisplay.length !== 0 &&
                <Container>
                    <InfiniteScroll
                        dataLength={itemsToDisplay.length} //This is important field to render the next data
                        next={nextData}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                            </p>
                        }
                        className = "row"
                        >                
                            {
                                itemsToDisplay.map(film => (
                                    <Col md={4} key={film.id}>
                                        <ThumbnailComponent movie={film}/>
                                    </Col>
                                ))
                            }
                    </InfiniteScroll>
                </Container>
            }
        </div>
     );
}
 
export default InfiniteScrollGrid;