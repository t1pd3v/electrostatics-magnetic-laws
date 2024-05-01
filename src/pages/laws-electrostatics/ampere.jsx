import Bar from "../../components/navbar"

import { Container, Image, Col, Row } from "react-bootstrap";

export default function Ampere() {
    return (
        <>
        <Bar/>

        <Container>
        <h1 className=" mt-3 p-2">La ley de Ampere</h1>

    <div className="p-2">
        <h2>Resumen del personaje</h2>
        <p>André-Marie Ampère fue un destacado matemático y físico francés nacido el 20 de enero de 1775 en Lyon, Francia, 
        y fallecido el 10 de junio de 1836 en Marsella, Francia. 
        Es reconocido principalmente por sus contribuciones fundamentales al desarrollo del electromagnetismo.</p>
    </div>

        <div>
        <Row>
                <Col xs={6} md={4}>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtcxPdh9QVboZ2TlGjCvgvGuzSpHA7cSxS46Zgbd1Ow&s" rounded />
                </Col>
                <Col xs={6} md={4}>
            <Image src="" rounded />
                </Col>
        </Row>
            <p className="p-2 m-2">Foto de André-Marie Ampère</p>
        </div>

        <div className="p-2 m-3">
            <h2 >¿En que consiste la ley del Ampere?</h2>
            <p>La ley de Ampère, formulada por el físico francés André-Marie Ampère, describe cómo las corrientes eléctricas generan 
        campos magnéticos alrededor de ellas. La ley establece la relación entre la circulación del campo magnético alrededor de un 
        circuito cerrado y la corriente eléctrica que atraviesa ese circuito.</p>

            <h3>Formula: ∮ B ⋅ dl = μ₀ * I​</h3>
            <p>∮ B ⋅ dl es la integral de la componente tangencial del campo magnético B alrededor de un 
        camino cerrado (también conocido como circulación de B),
        μ₀ es la permeabilidad magnética del vacío,
        I es la corriente eléctrica que atraviesa el área encerrada por el camino cerrado.</p>

            <p>En otras palabras, la fuerza electromotriz inducida en un circuito es igual a la velocidad con la que cambia 
            el flujo magnético a través de ese circuito. Esto significa que si hay un cambio en el campo magnético en el área donde 
            se encuentra un circuito conductor (ya sea por movimiento relativo entre el circuito y un imán, o por cambios en la corriente en un circuito cercano), 
            se generará una fuerza electromotriz en el circuito, lo que resultará en una corriente eléctrica inducida.</p>
            </div>
        </Container>
        </>
    )
}