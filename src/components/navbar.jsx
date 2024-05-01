import { Container, Nav, Navbar } from "react-bootstrap"

import { Outlet } from "react-router-dom";

export default function Bar() {
    return (
        <>
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/laws-electrostatics">Leyes Electrostaticas</Nav.Link>
            <Nav.Link href="/laws-magetic">Leyes Magneticas</Nav.Link>
            <Nav.Link href="/biographys">Biografias</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
      </>

    )
}