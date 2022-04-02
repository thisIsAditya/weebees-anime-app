import { useNavigate } from 'react-router';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import nf from '../../../assets/nf.jpg';
const NotFoundComponent = ()=>{
    const navigate = new useNavigate();
    const handleClick = () => navigate('/');
    return(
        <div>
            <Card className="text-center p-2 m-2">
                <Card.Img variant="top" className="mx-auto" src={nf} style={{maxWidth:"50vw", maxHeight:"50vh"}} />
                <Card.Body>
                    <Card.Title>Error 404!</Card.Title>
                    <Card.Text>
                    We could not find the page you are looking for...
                    </Card.Text>
                    <Button variant="primary" onClick={handleClick}>Home</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default NotFoundComponent;