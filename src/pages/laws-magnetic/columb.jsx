import Bar from "../../components/navbar"

import { Container, Row, Col, Image } from "react-bootstrap"

export default function Columb() {
    return (
        <>
        <Bar/>

        <Container>
        <h1 className=" mt-3 p-2">La ley de Columb</h1>

    <div className="p-2">
        <h2>Resumen del personaje</h2>
        <p>Fue un matemático, físico e ingeniero francés. 
        Se le recuerda por haber descrito de manera matemática la ley de atracción entre cargas eléctricas.</p>
    </div>

        <div className="p-2 m-2">
        <Row>
                <Col xs={6} md={4}>
            <Image src="https://www.lifeder.com/wp-content/uploads/2019/08/Charles-Coulomb-1.jpg" rounded />
                </Col>
                <Col xs={6} md={4}>
            <Image src="https://s1.significados.com/foto/ejemplo.-ley-de-coulomb.png?class=article" rounded />
                </Col>
        </Row>
            <p>Foto de Charles-Augustin de Coulomb</p>
        </div>

        <div className="p-2 m-3">
            <h2 >¿En que consiste la ley del Columb?</h2>
            <p>Esta ley establece que la fuerza entre dos cargas eléctricas puntuales es directamente proporcional al 
            producto de sus magnitudes y inversamente proporcional al cuadrado de la distancia entre ellas.</p>

            <h3>Formula: F=k*q1​q2/v2​</h3>
            <p>Donde FF es la fuerza, q1q1​ y q2q2​ son las magnitudes de las cargas, rr es la distancia entre 
            las cargas y kk es la constante de Coulomb</p>

            <p>En otras palabras, la fuerza electromotriz inducida en un circuito es igual a la velocidad con la que cambia 
            el flujo magnético a través de ese circuito. Esto significa que si hay un cambio en el campo magnético en el área donde 
            se encuentra un circuito conductor (ya sea por movimiento relativo entre el circuito y un imán, o por cambios en la corriente en un circuito cercano), 
            se generará una fuerza electromotriz en el circuito, lo que resultará en una corriente eléctrica inducida.</p>
            </div>
            </Container>
        </>
    )
}