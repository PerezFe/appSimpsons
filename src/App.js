import simpsons from './assets/Img/Simpsons.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import stilo from "./style.css"
import {useEffect, useState} from "react"
import Cardhomero from './components/Cardhomero';



function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async()=>{
    
    try {
        const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
        console.log(respuesta)
        const dato = await respuesta.json();
        console.log(dato[0]);
        setPersonaje(dato[0]);
        
      } catch (error) {
        console.log(error)
        //mostrar un mensaje al usuario que ocurrio un error
      }
  }

  return (
    
    <Container style={stilo}>
    <div className="text-center">
      <img src={simpsons} width="100%" alt='homero'/>
      <div className='text-center my-5'>
      <Button variant="warning" onClick={consultarAPI}>Obtener frase</Button>
      </div>
      
    </div>
    <Cardhomero personaje={personaje}></Cardhomero>
    </Container>
  );
}

export default App;
