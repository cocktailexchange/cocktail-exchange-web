import {Navbar, Container, Nav} from 'react-bootstrap';
import {APP_URLS} from "../../util/urls";
import "./nav.css"
import { useLocation } from 'react-router-dom';

function HeaderNav() {
    const location = useLocation();

    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href={APP_URLS.home}>The Cocktail Exchange</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey={location.pathname}>
              <Nav.Link href={APP_URLS.techniques}>Technique Library</Nav.Link>
              <Nav.Link>Ingredients</Nav.Link>
              <Nav.Link>Recipes</Nav.Link>
              <Nav.Link>Calculators</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default HeaderNav;
