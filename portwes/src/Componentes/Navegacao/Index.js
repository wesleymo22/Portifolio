import './Navegacao.css'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { useState } from 'react';

const Navegacao = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='fixed-top' expanded={expanded}>
      <Container>
        <Navbar.Brand href="#inicio">Wesley Moraes</Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link onClick={() => setExpanded(false)} href="#inicio">Inicio</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} href="#sobre">Sobre</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} href="#habilidades">Habilidades</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} href="#projetos">Projetos</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} href="#contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacao;