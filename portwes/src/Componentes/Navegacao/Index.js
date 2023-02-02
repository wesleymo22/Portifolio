import './Navegacao.css'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { useState } from 'react';

const Navegacao = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar variant="dark" expand="lg" className='fixed-top' expanded={expanded}>
      <Container>
        <Navbar.Brand href="#inicio" className='nome'>Wesley Moraes</Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link className='links' onClick={() => setExpanded(false)} href="#inicio">Inicio</Nav.Link>
            <Nav.Link className='links' onClick={() => setExpanded(false)} href="#sobre">Sobre</Nav.Link>
            <Nav.Link className='links' onClick={() => setExpanded(false)} href="#habilidades">Habilidades</Nav.Link>
            <Nav.Link className='links' onClick={() => setExpanded(false)} href="#projetos">Projetos</Nav.Link>
            <Nav.Link className='links' onClick={() => setExpanded(false)} href="#contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacao;