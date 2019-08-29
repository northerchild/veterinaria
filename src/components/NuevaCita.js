import React, { Component } from 'react';

class NuevaCita extends Component {
    state = {}
    render() {
        return ( 
            <div className = "card mt-5 py-5" >
            < h2 className = "card-title text-center mb-5" > Llena el formulario para crear una nueva cita </h2>

            <form >
            <div className = "form-group row" >
            <label className = "col-sm-4 col-lg-2 col-form-label" > Nombre Mascota < /label> 
            <div className="col-sm-8 col-lg-10">
            <input type = "text"
            className = "form-control"
            placeholder = "Nombre Mascota"
            name = "mascota" /
            >
            </div> 
            </div > { /*form - group*/ } 

            <div className = "form-group row" >
            <label className = "col-sm-4 col-lg-2 col-form-label" > Nombre Propietario < /label> 
            <div className="col-sm-8 col-lg-10">
            <input type = "text"
            className = "form-control"
            placeholder = "Nombre Propietario"
            name = "propietario" /
            >
            </div> 
            </div > { /*form - group*/ } 

            <div className = "form-group row" >
            <label className = "col-sm-4 col-lg-2 col-form-label" > Fecha < /label> 
            <div className="col-sm-8 col-lg-4">
            <input type = "date"
            className = "form-control"
            name = "fecha" /
            >
            </div> 
            <label className = "col-sm-4 col-lg-2 col-form-label" > Hora < /label> 
            <div className="col-sm-8 col-lg-4">
            <input type = "time"
            className = "form-control"
            name = "hora" /
            >
            </div> 
            </div > { /*form - group*/ } 

            <div className = "form-group row" >
            <label className = "col-sm-4 col-lg-2 col-form-label" > Fecha < /label> 
            <div className="col-sm-8 col-lg-4">
            <input type = "date"
            className = "form-control"
            name = "fecha" /
            >
            </div> 
            </div > { /*form - group*/ } 

            <div className = "form-group row" >
            <label className = "col-sm-4 col-lg-2 col-form-label" > Sintomás < /label> 
            <div className="col-sm-8 col-lg-10">
            <textarea name="sintomas" className="form-control" placeholder="describe los sintomás"></textarea>
            </div> 
            </div > { /*form - group*/ } 

            <input type="text" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita"/>
            </form> 
            </div >
        )
    }
}

export default NuevaCita;