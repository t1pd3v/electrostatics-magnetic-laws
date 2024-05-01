import Bar from '../../components/navbar';

export default function Tesla() {
    return (
        <>
        <Bar/>
        <div className="card-container">
        <h1>Ley de Tesla</h1>
        <div>
            <h2>¿En que consiste esta ley?</h2>
            <img src="https://tatofisicaelectric.wordpress.com/wp-content/uploads/2013/11/tesla-formula.jpg?w=584"/>
            <p>Consiste en variaciones en el flujo magnético, tiene la capacidad de transmitir a distancia electricidad sin necesitar ningún medio, ya sea sólido o algún tipo de conductor. 
                Entre las aplicaciones se encuentra la posibilidad de alimentar lugares de difícil acceso.
            Las ondas se transmiten a través del espacio, necesitando un emisor y un receptor. Contrariamente a 
            la transmisión de datos, el rendimiento es el criterio a maximizar, y que determinará las diferencias entre las principales tecnologías.</p>
            <p>Fmagnética = qvB</p>
        </div>
      </div>
        </>
    )
}