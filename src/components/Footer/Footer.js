import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import fevicon from "../../assets/favicon.ico"; 
const FooterComponent = () => {


    return ( 
        <div>
            <div className="bg-dark bg-opacity-75 p-4">
                <Container>
                    <Row>
                        <Col md={4} className="mb-4">
                        <Card className="d-flex align-items-center h-100 p-2 bg-dark bg-opacity-75 text-white">
                            <Card.Img variant="top" src={fevicon} style={{"height" : "150px", "width" : "150px", "objectFit" : "contain"}} />
                            <Card.Body>                        
                                <Card.Title className="font-heading">Author</Card.Title>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="d-flex flex-column align-items-center mb-4">
                            <Card className="d-flex align-items-center h-100 bg-dark bg-opacity-75 text-white">
                                <Card.Body>
                                    <Card.Title>
                                        <h3 className="font-heading">About Us</h3>
                                    </Card.Title>
                                    <Card.Text>                                
                                        WeeBees Anime is a demo website made using React and Bootstrap. It contains Corousel, Slider and Infinite Scrolling Grid components.
                                        Feel free to make this website more awesome by contributing to it on Github.<br />
                                    </Card.Text>
                                    <a href="https://github.com/thisIsAditya/weebees-anime-app" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>                               
                        <Col md={4} className="mb-4">
                            <Card className="h-100 bg-dark bg-opacity-75 text-white">
                                <Card.Body>
                                    <Card.Title>
                                        <h3 className="font-heading">Contact Us</h3>
                                    </Card.Title>                                                                 
                                    <div className="d-flex justify-content-center align-items-center my-5">                                         
                                        <a href="https://www.linkedin.com/in/pandeyapi" className="m-2" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>
                                        </a>
                                        <a href="mailto:pandey.api2k@gmail.com" className="m-2" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-check" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
</svg>
                                        </a>                                        
                                        <a href="tel:+91 7709213053" className="m-2" target="_blank" rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
                                        </a>                                        
                                    </div>                                    
                                </Card.Body>
                            </Card>     
                        </Col>
                    </Row>
                </Container>
            </div>
            <footer className="bg-dark d-flex justify-content-center">
                <p className="text-white mt-2 font-weight-bold">Made with love {
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                  </svg>
                } by <a href="https://www.linkedin.com/in/pandeyapi" target="_blank" rel="noreferrer" >Aditya Pandey</a></p>
            </footer>
        </div>
     );
}
 
export default FooterComponent;