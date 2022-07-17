import { decorator } from '@babel/types';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const btn_style = {
    color : 'white',
    textDecoration:'none',
    margin:"15px 0"
}
const logo_style = {
    color : 'white',
    textDecoration:'italic',
    margin:"10px 0",
}

function Navigation() {
  return (
    <Navbar bg="dark" sticky="top" variant="pills" defaultActiveKey="/home">
        <Container>
            <Nav.Item>
                <Link className="link-btn" style={btn_style} to="/">My Portfolio</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="link-btn" style={btn_style} to="/tictoe">Tic Toe Game</Link>
            </Nav.Item>
            <Nav.Item>
                <Link className="link-btn disabled" style={btn_style} to="/django_projects">Django Projects</Link>
            </Nav.Item>
        </Container>
    </Navbar>

  );
}

export default Navigation;