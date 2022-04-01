import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import favicon from  "../../assets/favicon.ico";
const NavbarComponent = () => {
    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src = {favicon}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            WeeBees Anime
            </Navbar.Brand>
            </Container>
        </Navbar>
     );
}
 
export default NavbarComponent;