import Spinner from 'react-bootstrap/Spinner'
const LoadingComponent = () => {
    return ( 
        <div className="d-flex align-items-center mt-5 justify-content-center ">
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="primary" />
        </div>
     );
}
 
export default LoadingComponent;