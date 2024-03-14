import './styles/Menu.css';
import { Navbar, Nav } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Menu() {
    return (
        <div className='nav-sticky'>
            <Navbar className="nav-background" expand="sm" variant="light" sticky="top">
                <Navbar.Brand className="nav-link">
                    <AnchorLink className="nav-link" href='#home'>SARA KITZING</AnchorLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='nav-right' id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <AnchorLink className="nav-link" href='#home'>HOME</AnchorLink>
                        <AnchorLink className="nav-link" href='#portfolio' > PORTFOLIO </AnchorLink>
                        <AnchorLink className="nav-link" href="#about"> ABOUT ME </AnchorLink>
                        <AnchorLink className="nav-link" href="#contact"> CONTACT</AnchorLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );}

export default Menu;