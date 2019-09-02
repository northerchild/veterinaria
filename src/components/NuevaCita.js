import React, { Component } from 'react';
import uuid from 'uuid';
class NuevaCita extends Component {
    state = {
        cita:{
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        },
        error:false
    }
    //Leer datos del usuario cuando escribre
    handleChange= e=>{
        console.log(e.target.name + ":" + e.target.value);
        //Colocar lo que el usuario escribe en el state
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name]: e.target.value
            }
        })
    }
    //Enviar datos
    handleSubmit = e=>{
        e.preventDefualt();

        //Extraer los valores del state
        const {mascota, propietario,fecha, hora, sintomas} = this.state.cita
        //Validar que los campos esten llenos
            if(mascota === "" || propietario === "" || fecha === "" || hora ==="" || sintomas === ""){
                this.setState({
                    error:true
                });
                //Detener la ejecución
                return;
            }

        //Generar objeto con los datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();
        //Agregar la cita al state de App
        this.props.crearNuevaCita(nuevaCita)

    }


    render() {
        return ( 
            <div className = "card mt-5 py-5" >
            < h2 className = "card-title text-center mb-5" > Llena el formulario para crear una nueva cita </h2>

            <form onSubmit={this.handleSubmit}>
            <div className = "form-group row" >
            <label className = "col-sm-4 col-lg-2 col-form-label" > Nombre Mascota < /label> 
            <div className="col-sm-8 col-lg-10">
            <input type = "text"
            className = "form-control"
            placeholder = "Nombre Mascota"
            name = "mascota"
            onChange={this.handleChange}
            value = {this.state.cita.mascota}
            />
            </div> 
            </div > { /*form - group*/ } 

            <div className = "form-group row" >
            <label className = "col-sm-4 col-lg-2 col-form-label" > Nombre Propietario < /label> 
            <div className="col-sm-8 col-lg-10">
            <input type = "text"
            className = "form-control"
            placeholder = "Nombre Propietario"
            name = "propietario" 
            onChange={this.handleChange}
            value = {this.state.cita.propietario}
            />
            </div> 
            </div > { /*form - group*/ } 

            <div className = "form-group row" >
            <label className = "col-sm-4 col-lg-2 col-form-label" > Fecha < /label> 
            <div className="col-sm-8 col-lg-4">
            <input type = "date"
            className = "form-control"
            name = "fecha"
            onChange={this.handleChange}
            value = {this.state.cita.fecha}    
             />
            </div> 
            <label className = "col-sm-4 col-lg-2 col-form-label" > Hora < /label> 
            <div className="col-sm-8 col-lg-4">
            <input type = "time"
            className = "form-control"
            name = "hora" 
            onChange={this.handleChange}
            value = {this.state.cita.hora}    
            />
            </div> 
            </div > { /*form - group*/ } 

            <div className = "form-group row" >
            <label className = "col-sm-4 col-lg-2 col-form-label" > Sintomás < /label> 
            <div className="col-sm-8 col-lg-10">
            <textarea 
            name="sintomas" 
            className="form-control" 
            placeholder="describe los sintomás"
            onChange={this.handleChange}
            value = {this.state.cita.mascota}
            >
            </textarea>
            </div> 
            </div > { /*form - group*/ } 

            <input type="text" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita"/>
            </form> 
            </div >
        )
    }
}

export default NuevaCita;