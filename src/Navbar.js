import Nav from 'react-bootstrap/Nav';
import { BoxArrowInRight, List } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";

export default function Navbar() {

    return (
            <Nav className="navbar">
                <Nav.Item className="hamburgerMenu">
                    <Nav.Link className="nav-link">
                        <List className="m-2" size={30}/>
                    </Nav.Link>
                </Nav.Item>
              
                <Nav.Item>
                    <Nav.Link className="nav-link" >Searchbar here</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className="nav-link">
                        Sign In
                        <BoxArrowInRight size={25}/>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
    )
}
