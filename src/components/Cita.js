import React from 'react'


const Cita = ({cita}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">Nombre Mascota: {cita.mascota}</h3>
            <p className="card-text">Nombre Dueño: <span>{cita.propietario}</span></p>
            <p className="card-text">Fecha: <span>{cita.fecha}</span></p>
            <p className="card-text">Hora: <span>{cita.hora}</span></p>
            <p className="card-text"><span>Sintomas:</span></p>
            <p className="card-text">{cita.sintomas}</p>
        </div>
      
    </div>
);

export default  Cita