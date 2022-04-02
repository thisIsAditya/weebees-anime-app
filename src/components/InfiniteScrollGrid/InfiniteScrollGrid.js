import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingComponent from "../Utils/Loading/LoadingComponent.js";
import ErrorComponent from "../Utils/Error/ErrorComponent.js";
import { useEffect, useState } from 'react';
import ThumbnailComponent from '../Thumbnail/ThumbnailComponent.js';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const InfiniteScrollGrid = ({items, isLoading, err}) => {
    const [itemsToDisplay, setItemsToDisplay] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    useEffect(()=>{
        if(items.length > 0){
            const itemsSet = new Set(items )
            setItemsToDisplay(items.slice(0,12))
        }
    },[items])
    const nextData = ()=> {
        if(itemsToDisplay.length >= items.length){
            setHasMore(false);
        }
        setTimeout(()=>{
            const newItemsList = new Set([...itemsToDisplay, ...items.slice(itemsToDisplay.length, itemsToDisplay.length+12)]);
            console.log(newItemsList);
            setItemsToDisplay([...newItemsList]);
        },2000)
    }
    return (
        <>
            {isLoading && <LoadingComponent />}
            {err && <ErrorComponent err={err} />}
            {
                itemsToDisplay &&
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
        </>
     );
}
 
export default InfiniteScrollGrid;