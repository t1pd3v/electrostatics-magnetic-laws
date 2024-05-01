import { Container, Image, Col, Row } from "react-bootstrap";

import Bar from "../../components/navbar"


export default function Farday() {
    return (
        <>
        <Bar/>
        <Container>
        <h1 className=" mt-3 p-2">La ley de Faraday</h1>

    <div className="p-2">
        <h2>Resumen del personaje</h2>
        <p>Michael Faraday fue un científico británico que estudió el electromagnetismo y la electroquímica. 
        Sus principales descubrimientos incluyen la inducción electromagnética, el diamagnetismo y la electrólisis.</p>
    </div>

        <div>
        <Row>
                <Col xs={6} md={4}>
            <Image src="https://eltamiz.com/images/2013/10/Faraday-grande.jpg" rounded />
                </Col>
                <Col xs={6} md={4}>
            <Image src="" rounded />
                </Col>
        </Row>
            <p>Foto de Michael Faraday</p>
        </div>

        <div className="p-2 m-3">
            <h2 >¿En que consiste la ley del Faraday?</h2>
            <p>La Ley de Faraday es uno de los principios fundamentales en el campo de la electromagnetismo, 
            que describe cómo un cambio en el flujo magnético a través de un circuito eléctrico induce una fuerza electromotriz (fem) en ese circuito. 
            Esta ley fue formulada por el físico y químico británico Michael Faraday en la década de 1830. </p>

            <h3>Formula: ε=−dΦ/dt​</h3>
            <p> ε es la fuerza electromotriz inducida en el circuito, medida en voltios (V).
            dΦ/dt​ es la tasa de cambio del flujo magnético a través del circuito en el tiempo, medida en webers por segundo (Wb/s). </p>

            <p>En otras palabras, la fuerza electromotriz inducida en un circuito es igual a la velocidad con la que cambia 
            el flujo magnético a través de ese circuito. Esto significa que si hay un cambio en el campo magnético en el área donde 
            se encuentra un circuito conductor (ya sea por movimiento relativo entre el circuito y un imán, o por cambios en la corriente en un circuito cercano), 
            se generará una fuerza electromotriz en el circuito, lo que resultará en una corriente eléctrica inducida.</p>
            </div>
        </Container>
        </>
    )
}