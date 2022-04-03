import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import favicon from  "../../assets/favicon.ico";
import {Link} from "react-router-dom";
const NavbarComponent = () => {
    return ( 
        <Navbar bg="dark" variant="dark" className='py-md-4 py-ls-2 fixed-top bg-opacity-0'>
            <Container>
                <Link to="/" style={{"textDecoration" : "none"}}>
                    <Navbar.Brand>
                        <img
                        alt="Aditya Pandey's Logo"
                        src = {favicon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    WeeBees Anime
                    </Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
     );
}
 
export default NavbarComponent;