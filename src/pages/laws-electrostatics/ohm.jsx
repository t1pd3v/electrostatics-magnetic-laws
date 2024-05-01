import { Container, Image, Col, Row } from "react-bootstrap";

import Bar from "../../components/navbar"


export default function Ohm() {
    return (
        <>
        <Bar/>
        <Container>
        <h1 className=" mt-3 p-2">La ley de Ohm</h1>

    <div className="p-2">
        <h2>Resumen del personaje</h2>
        <p>Georg Simon Ohm fue un físico y matemático alemán conocido principalmente por su investigación sobre las 
        corrientes eléctricas., formulando la ley que lleva su nombre. 
        También se interesó por la acústica, la polarización de las pilas y las interferencias luminosas.</p>
    </div>

        <div>
        <Row>
                <Col xs={6} md={4}>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLerzs3AWYkfmIOr4F5OJm4VgusF7uAAv4ZNv2tr_gLWCd1dUCdFbSN47IpNksRPuTS2E&usqp=CAU" rounded />
                </Col>
                <Col xs={6} md={4}>
            <Image src="" rounded />
                </Col>
        </Row>
            <p>Foto de Georg Simon Ohm</p>
        </div>

        <div className="p-2 m-3">
            <h2 >¿En que consiste la ley del Ohm?</h2>
            <p>La Ley de Ohm es un principio fundamental en la teoría eléctrica que establece la relación entre la corriente eléctrica (I), la diferencia de potencial (V) y la resistencia eléctrica (R) en un circuito eléctrico. </p>

            <h3>Formula: V=I×R</h3>
            <p>    V es la diferencia de potencial (tensión) medida en voltios (V).
            II es la corriente eléctrica medida en amperios (A).
            RR es la resistencia eléctrica medida en ohmios (ΩΩ). </p>

            <p>Esta ecuación indica que la corriente que fluye a través de un conductor es directamente proporcional a la 
            diferencia de potencial aplicada a través de él e inversamente proporcional a la resistencia del conductor. 
            En otras palabras, a mayor diferencia de potencial aplicada (mayor voltaje), mayor será la corriente que fluye a 
            través del conductor, siempre y cuando la resistencia permanezca constante. Y viceversa, si la resistencia aumenta, 
            la corriente disminuirá para una diferencia de potencial dada.</p>
            </div>
        </Container>
        </>
    )
}