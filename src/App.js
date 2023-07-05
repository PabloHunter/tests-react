import './App.css';
import React, { Component } from "react"
import Hora from './components/HoraComStates'
import { ExampleProps } from './components/Props/Props';
import { Pessoa } from './components/Props/Pessoa';
import { Contador } from './components/useState/Contador';
import { DuplicatorText } from './components/useState/DuplicatorText';
//Componente com Estados  
class App extends Component {
  nombre = 'Ashley';

  render() {
    return (
      <div>
        <Hora />
        <ExampleProps nome={this.nombre} />
        <Pessoa nome='Pablo' idade='21'
        profissao='Estudante' 
        foto='http://via.placeholder.com/150' />
        <Contador />
        <DuplicatorText />
      </div>
    )
  }
}

export default App;
