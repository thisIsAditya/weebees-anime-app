import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import fevicon from "../../assets/favicon.ico"; 
const FooterComponent = () => {
    return ( 
        <div>
            <div className="bg-dark bg-opacity-75 p-4">
                <Container>
                    <Row>
                        <Col>
                        <Card className="d-flex align-items-center h-100 p-2">
                            <Card.Img variant="top" src={fevicon} style={{"height" : "150px", "width" : "150px", "objectFit" : "contain"}} />
                            <Card.Body>                        
                                <Card.Title>Author</Card.Title>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col className="d-flex flex-column align-items-center">
                            <Card className="d-flex align-items-center h-100">
                                <Card.Body>
                                    <Card.Title>
                                        <h3>About Us</h3>
                                    </Card.Title>
                                    <Card.Text>                                
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>                               
                        <Col>
                            <Card className="h-100">
                                <Card.Body>
                                    <Card.Title>
                                        <h3>Contact Us</h3>
                                    </Card.Title>
                                    <Card.Text>                                
                                        <address> 
                                            You can contact us at:<br/  >
                                            TechOnTheNet.com<br/>
                                            123 Somewhere St.<br/>
                                            City, State
                                        </address>
                                    </Card.Text>
                                </Card.Body>
                            </Card>     
                        </Col>
                    </Row>
                </Container>
            </div>
            <footer className="bg-dark d-flex justify-content-center">
                <p className="text-white mt-2 font-weight-bold">Made with Love by Aditya Pandey</p>
            </footer>
        </div>
     );
}
 
export default FooterComponent;