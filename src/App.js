import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListasCitas from './components/ListasCitas';

class App extends Component {
    state = {
        citas:[]
    }
    crearNuevaCita = datos =>{
        //Copiar el state actual
            const citas = [...this.state.citas, datos]
        //Agregar el nuevo state

        this.setState({citas})
    }

    //Cuando la app carga
    componentDidMount(){
        const citals= localStorage.getItem('citas')
        if(citals){
            this.setState({
                citas:JSON.parse(citals)
            })
        }
    }

    //Cuando eliminamos o actualizamos una cita
    componentDidUpdate(){
        localStorage.setItem('citas', JSON.stringify(this.state.citas))
    }

    //Eliminar citas del state

    eliminarCita = id =>{
        //Tomar una copial del state
        const citasActuales = [...this.state.citas]
        //utilizar filter para sacar el elemento @id del arreglo
        const citas = citasActuales.filter(cita => cita.id !== id)
        //actualizar el state
        this.setState({
            citas
        })
    }

    render() {
        return ( 
            <div className = "container" >
            <Header titulo = 'Administrador Pacientes Veterinaria' / >
                <div className = "row" >
                    <div className = "col-md-10 mx-auto" >
                    <NuevaCita  crearNuevaCita={this.crearNuevaCita}/ >
                    </div> 
                    <div className = "col-md-10 mx-auto" >
                    <ListasCitas citas={this.state.citas}
                                 eliminarCita={this.eliminarCita}
                    /> 
                    </div> 
                </div> 
            </div>
        );
    }
}
export default App;