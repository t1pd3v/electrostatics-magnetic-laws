import {Container, ListGroup } from "react-bootstrap"

import { Link } from "react-router-dom"

import { Outlet } from "react-router"

export default function Laws_navbar() {
  return (
    <>
        <Container className="p-2 m-2">
          <ListGroup.Item><Link to="/laws-electrostatics/tesla">Ley de Tesla</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/laws-electrostatics/ohm">Ley de Ohm</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/laws-electrostatics/faraday">Ley de Faraday</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/laws-electrostatics/ampere">Ley de Ampere</Link></ListGroup.Item>
        </Container>

      <Outlet />
    </>
  )
}