import {Container, ListGroup } from "react-bootstrap"

import { Link } from "react-router-dom"

import { Outlet } from "react-router"

export default function Laws_magnetic_navbar() {
  return (
    <>
        <Container className="p-2 m-2">
          <ListGroup.Item><Link to="/laws-magetic/columb">Ley de Columb</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/laws-magetic/maxwell">Ley de Maxwell</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/laws-magetic/gauss">Ley de Gauss</Link></ListGroup.Item>
        </Container>

      <Outlet />
    </>
  )
}